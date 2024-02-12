import Link from 'next/link';
import Image from 'next/image';

import { globalStyles } from '@/lib/globalStyles';

import { DesktopNav } from '@/components/modules/navigation/desktop';
import { MobileNav } from '@/components/modules/navigation/mobile';

import styles from './styles.module.scss';

const menus = [
  {
    href: '/blog',
    title: 'Blog',
  },
  {
    href: '/about-me',
    title: 'About Me',
  },
  {
    href: '/contact',
    title: 'Contact',
  },
];

export function Header() {
  return (
    <header
      className={`${globalStyles.paddingX} bg-primary fixed top-0 z-10 flex w-full items-center p-5`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/logo.png" alt="Logo" width={111} height={111} />
        </Link>
        <DesktopNav menus={menus} />
        <MobileNav menus={menus} />
      </nav>
    </header>
  );
}
