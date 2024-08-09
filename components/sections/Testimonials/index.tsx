'use client';

import React from 'react';

import { testimonials } from '@/data';
import { InfiniteMovingCards } from '@/components/ui/InfiniteMovingCard';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <h2 className="heading mb-10">
        Kind words from <b>Satisfied Clients</b> & <b>Collaborators</b>
      </h2>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md antialiased">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}
