import { NavItems } from '../navItems';

import { NavProps } from '../types';

export function DesktopNav({ menus }: NavProps) {
  return (
    <div className="hidden list-none flex-row gap-10 md:flex">
      <NavItems menus={menus} />
    </div>
  );
}
