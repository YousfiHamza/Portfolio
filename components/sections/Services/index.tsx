'use client';

import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';

import { AnimatePresence, motion } from 'framer-motion';
import { CanvasRevealEffect } from '@/components/modules/CanvasRevealEffect';

import { services } from '@/data';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export function Services() {
  return (
    <section id="services">
      <h2 className="heading">
        All the <b>Services</b> I&apos;m providing
      </h2>
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 bg-white px-8 py-20 dark:bg-black-100 lg:flex-row">
        {services.map((service, i) => (
          <Card
            key={service.title + i}
            {...service}
            content={<AceternityButton text={service.button} />}
          >
            <CanvasRevealEffect
              animationSpeed={4}
              containerClassName={service.containerClassName}
              colors={service.colors}
            />
            <div className="absolute inset-0 bg-black/50 [mask-image:radial-gradient(400px_at_center,white,transparent)] dark:bg-black/90" />
          </Card>
        ))}
      </div>
    </section>
  );
}

const Card = ({
  title,
  content,
  description,
  titleColor = 'white',
  iconPath,
  children,
}: {
  title: string;
  content: React.ReactNode;
  titleColor?: string;
  description?: string;
  iconPath?: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative mx-auto flex h-[30rem] w-full max-w-sm items-center justify-center border border-black/[0.2] bg-slate-100 p-4 dark:border-white/[0.2] dark:bg-slate-900"
    >
      <Icon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

      <AnimatePresence>
        {hovered ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        ) : (
          iconPath && (
            <div className="absolute z-10 opacity-30 dark:invert">
              <Image
                src={iconPath}
                alt="card's image"
                width={333}
                height={333}
              />
            </div>
          )
        )}
      </AnimatePresence>

      <div className="relative z-30">
        <div className="mx-auto flex w-full items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          {content}
        </div>
        <div className="z-20 mt-4 hidden overflow-hidden transition duration-200 group-hover/canvas-card:block group-hover/canvas-card:-translate-y-2 md:mt-0">
          <h3
            className={`mb-4 text-center font-sans text-xl font-bold uppercase text-${titleColor} md:mb-6 md:text-4xl`}
          >
            {title}
          </h3>
          <p
            className={`text-left font-serif text-base text-slate-200 ${inter.className}`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const AceternityButton = ({ text }: { text: string }) => {
  return (
    <div className="relative inline-flex overflow-hidden rounded-full p-[1px]">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-default items-center justify-center rounded-full bg-slate-300 px-5 py-2 text-2xl font-bold text-purple-500 backdrop-blur-3xl dark:bg-slate-700">
        {text}
      </span>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
