import Image from 'next/image';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { NavItems } from '../navItems';

import { NavProps } from '../types';

export const MobileNav = ({ menus }: NavProps) => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            height={24}
            width={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="bg-primary flex flex-col md:hidden">
          <Image
            src="/assets/logo.png"
            alt="logo"
            height={55}
            width={55}
            className="cursor-pointer"
          />
          {/* Replace logo with Name or something horizontal */}
          <Separator className="border-gray-150 border" />
          <NavItems menus={menus} />
        </SheetContent>
      </Sheet>
    </div>
  );
};
