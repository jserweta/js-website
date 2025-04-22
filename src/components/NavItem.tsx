'use client';

import {useNavContext} from '@/context/NavContext';
import {resolveHref} from '@/sanity/lib/utils';
import Link from 'next/link';
import {ReactSVG} from 'react-svg';
import {NavbarQueryResult} from '../../sanity.types';

type NavbarMenuItem = NonNullable<NonNullable<NavbarQueryResult>['menuItems']>[number];

export default function NavItem({menuItem}: {menuItem: NavbarMenuItem}) {
  const {activeNavItem, setActiveNavItem} = useNavContext();

  const isAnchor = menuItem._type === 'anchorMenuItem';

  const handleClick = () => {
    if (isAnchor && menuItem.anchorId) {
      setActiveNavItem(menuItem.title || '');
      const el = document.querySelector(`#${menuItem.anchorId}`);
      console.log(el, 'menuItemTItle', menuItem.title, 'icon URL: ', menuItem.iconURL);
      if (el) {
        el.scrollIntoView({behavior: 'smooth'});
      }
    }
  };

  if (isAnchor) {
    return (
      <div
        className={`${menuItem.title === activeNavItem ? 'text-white' : 'text-secondary'} group flex items-center gap-1.5 hover:translate-x-[5px] hover:scale-105 hover:cursor-pointer`}
        onClick={handleClick}
      >
        {menuItem.iconURL && (
          <ReactSVG
            src={menuItem.iconURL}
            className={`h-auto w-[18px] ${menuItem.title === activeNavItem ? 'fill-white stroke-white stroke-[0.5px]' : ''}`}
            beforeInjection={(svg) => {
              svg.classList.add('group-hover:fill-white', 'fill-secondary');
            }}
          />
        )}
        <p className="font-futura m-0 inline-block text-xl leading-5 group-hover:text-white">
          {menuItem.title}
        </p>
      </div>
    );
  }

  const href = resolveHref(menuItem._type, menuItem.slug);
  if (!href) return null;

  return (
    <div
      className={`${menuItem.title === activeNavItem ? 'text-white' : 'text-secondary'} hover:translate-y-[5px] hover:scale-105 hover:cursor-pointer hover:text-white`}
      onClick={() => setActiveNavItem(menuItem.title || '')}
    >
      <Link href={href} className="font-futura m-0 flex items-center text-xl leading-5">
        {menuItem.title || 'Home'}
      </Link>
    </div>
  );
}
