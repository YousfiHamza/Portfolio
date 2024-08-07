import { Webhook, Download } from 'lucide-react';

import { MagicButton } from '@/components/ui/MagicButton';
import { Spotlight } from '@/components/ui/Spotlight';
import { TextGenerateEffect } from '@/components/ui/TextGenerate-Effect';

export function Hero() {
  return (
    <div className="text-dark-100 pb-20 pt-36 dark:text-purple-100">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="-top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vs]" fill="blue" />
      </div>
      <div className="dark:bg-grid-white/[0.1] bg-grid-black/[0.1] absolute left-0 top-0 flex h-screen w-full items-center justify-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] dark:bg-black-100" />
      </div>
      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <p className="max-w-80 text-center text-xs uppercase tracking-widest opacity-75">
            Transforming Concepts into Seamless User Experiences
          </p>
          <TextGenerateEffect
            words="👨‍💻 As a Web Engineer 🌐 my goal is to help build the most performant ⏱️ converging 💰 and good looking websites for my clients 🤝🏻 using the latest technologies 💯"
            className="text-center text-[40px] md:text-6xl lg:text-8xl"
          />
          <div className="flex w-full flex-col items-center justify-center md:flex-row md:gap-3">
            <MagicButton icon={<Webhook />} text="See My Work" />
            <MagicButton icon={<Download />} text="Download My Resume" />
          </div>
        </div>
      </div>
    </div>
  );
}
