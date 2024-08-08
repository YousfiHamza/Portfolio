import { Hero } from '@/components/sections/hero';
import { RecentProjects } from '@/components/sections/RecentProjects';

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-white px-5 dark:bg-black-100 sm:px-10">
      <div className="w-full max-w-7xl">
        <Hero />
        <RecentProjects />
      </div>
    </main>
  );
}
