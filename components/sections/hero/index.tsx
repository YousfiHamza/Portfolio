import { Webhook, Download } from 'lucide-react';
import Image from 'next/image';

import { MagicButton } from '@/components/ui/MagicButton';
import { Spotlight } from '@/components/ui/Spotlight';
import { TextGenerateEffect } from '@/components/ui/TextGenerate-Effect';
import { Boxes } from '@/components/modules/BackgroundBoxes';
import Hero from '@/public/Hero.jpg';

export function HeroSection() {
  return (
    <section
      className="text-dark-100 pb-20 pt-20 dark:text-purple-100 md:pt-36"
      id="hero"
    >
      <div className="z-10">
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center">
        <Boxes />
      </div>
      <div className="md:mb-30 relative z-30 flex justify-center">
        <div className="flex flex-col items-center justify-evenly gap-5 lg:flex-row">
          <div className="order-2 flex max-w-[89vw] flex-col items-center justify-center md:max-w-xl lg:order-1 lg:max-w-[50%]">
            <p className="max-w-80 text-center text-xs uppercase italic tracking-widest opacity-75">
              Transforming Concepts into Seamless User Experiences
            </p>
            <TextGenerateEffect
              duration={0.25}
              words="👨‍💻 As a Web Engineer 🌐 my goal is to help build the most performant ⏱️ converging 💰 and good looking websites for my clients 🤝🏻 using the latest technologies 💯"
              className="text-center text-[40px] md:text-6xl lg:text-8xl"
            />
            <div className="flex w-full flex-col items-center justify-center md:flex-row md:gap-3">
              <MagicButton icon={<Webhook />} text="See My Work" />
              <MagicButton icon={<Download />} text="Download My Resume" />
            </div>
          </div>
          <div className="order-1 mb-12 mt-10 md:mb-0 lg:order-2">
            <h1 className="my-3 w-full text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Hi 👋🏽 I&apos;m{' '}
              <b className="text-2xl text-yellow-500 sm:text-3xl md:text-4xl lg:text-5xl">
                HAMZA
              </b>
            </h1>
            <div className="relative h-auto w-full animate-blob overflow-hidden border-4 border-purple-200 shadow-2xl shadow-purple-950 dark:border-purple-200 dark:shadow-purple-200 md:max-w-[444px]">
              <Image
                src={Hero}
                placeholder="blur"
                alt="Hamza with his Laptop"
                sizes="(min-width: 400px) 259px, (min-width: 768px) 333px, 444px"
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
