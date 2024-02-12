'use client';

import { useState } from 'react';
import Link from 'next/link';

import { NavProps } from '../types';

export function NavItems({ menus }: NavProps) {
  const [active, setActive] = useState('');

  return (
    <ul className="list-none flex-row gap-10 md:flex">
      {menus.map(menu => (
        <li
          key={menu.title}
          className={`${
            active === menu.title ? 'text-white' : 'text-secondary'
          } my-3 cursor-pointer text-[18px] font-medium hover:text-white sm:my-0`}
        >
          <Link href={menu.href}>{menu.title}</Link>
        </li>
      ))}
    </ul>
  );
}
