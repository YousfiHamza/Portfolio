'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    avatar: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards',
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse',
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        // max-w-7xl to w-screen
        'scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          // change gap-16
          'flex w-max min-w-full shrink-0 flex-nowrap gap-16 pb-8',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[90vw] max-w-full flex-shrink-0 rounded-2xl border border-slate-800 bg-slate-100 p-4 shadow-lg shadow-black-100 dark:bg-slate-900 dark:shadow-slate-500 md:w-[60vw] md:p-8"
            style={{
              backgroundColor:
                'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
            }}
            key={idx}
          >
            <blockquote className="flex h-full flex-col justify-between">
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <div className="relative z-20 text-sm font-normal leading-[1.6] text-slate-900 dark:text-slate-200 md:text-lg">
                {item.quote}
              </div>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                {/* add this div for the profile img */}
                <div className="relative me-3 h-14 min-w-14 overflow-hidden rounded-full border-2 border-slate-700 dark:border-slate-500">
                  <Image
                    src={item.avatar}
                    alt={`${item.name}'s svatar`}
                    width={56}
                    height={56}
                  />
                </div>
                <span className="flex flex-col gap-1">
                  {/* change text color, font-normal to font-bold, text-xl */}
                  <span className="text-xl font-bold text-slate-800 dark:text-slate-300">
                    {item.name}
                  </span>
                  {/* change text color */}
                  <span className="text-sm font-normal italic text-slate-700 dark:text-slate-400">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
