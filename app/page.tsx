import { HeroSection } from '@/components/sections/hero';

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-white px-5 sm:px-10 dark:bg-black-100">
      <div className="w-full max-w-7xl">
        <HeroSection />
      </div>
    </main>
  );
}
