'use client';

import { LucideSend } from 'lucide-react';

import { projects } from '@/data';
import { PinContainer } from '@/components/modules/Pin';

export function RecentProjects() {
  return (
    <section className="mt-10 pb-10">
      <h2 className="heading">
        Small selection of my <b>Recent Projects</b>
      </h2>
      <div className="mt-10 flex flex-col flex-wrap items-center justify-center gap-2 p-4 md:flex-row md:gap-12">
        {projects.map(item => (
          <article
            className="mb-2 flex h-[25rem] w-full max-w-[80vw] items-center justify-center sm:mb-0 sm:max-w-96 lg:min-h-[32.5rem]"
            key={item.id}
            suppressHydrationWarning
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative mb-10 flex h-[20vh] w-[80vw] items-center justify-center overflow-hidden rounded-3xl rounded-bl-none rounded-br-none sm:w-96 lg:h-[30vh]">
                <div
                  className="relative h-full w-full overflow-hidden"
                  style={{ backgroundColor: '#13162D' }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img src={item.img} alt="cover" className="absolute bottom-0" />
              </div>

              <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                {item.title}
              </h1>

              <p
                className="line-clamp-2 text-sm font-light italic text-slate-500 lg:text-lg lg:font-normal"
                style={{
                  margin: '1vh 0',
                }}
              >
                {item.des}
              </p>

              <div className="mb-3 mt-7 flex items-center justify-between">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[.2] bg-slate-700 dark:bg-black-100 lg:h-10 lg:w-10"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <p className="flex text-sm italic text-purple-800 dark:text-slate-400 md:text-xs lg:text-lg">
                    Check Live Site
                  </p>
                  <LucideSend className="ms-1 text-purple-800 dark:text-slate-400" />
                </div>
              </div>
            </PinContainer>
          </article>
        ))}
      </div>
    </section>
  );
}
