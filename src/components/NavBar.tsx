'use client';

import {useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import {NavbarQueryResult} from '../../sanity.types';
import ImageWrapper from './ImageWrapper';
import NavItem from './NavItem';
import {OptimisticSortOrder} from './OptimisticSortOrder';

export default function NavBar({data}: {data: NavbarQueryResult}) {
  const {logo, menuItems} = data ?? {};

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const openMenu = () => setIsOpen(true);
  const isTablet = useMediaQuery({minWidth: 576, maxWidth: 992});

  return (
    <>
      <header
        className={`before:bg-card fixed top-0 z-20 h-full before:absolute before:top-0 before:right-0 before:h-screen before:w-[calc(100vw-var(--site-max-width)/2)] before:content-[''] lg:w-[calc(var(--site-max-width)/6)] xl:w-(--nav-max-width) ${isOpen ? 'block w-[calc(var(--site-max-width)/6)]' : 'hidden w-[60px]'} hover:cursor-pointer sm:block lg:hover:cursor-auto`}
        onMouseEnter={isTablet ? toggleMenu : undefined}
        onMouseLeave={isTablet ? toggleMenu : undefined}
        onMouseOver={isTablet ? openMenu : undefined}
      >
        <div className="bg-card flex h-full justify-center">
          <nav className="relative flex flex-col justify-center gap-5 p-5">
            {logo && (
              <ImageWrapper
                image={logo}
                alt="JS website logo"
                size="115px"
                width={115}
                height={115}
                classesWrapper={`mb-12 h-auto w-[115px] ${isOpen ? 'block' : 'hidden lg:block'}`}
              />
            )}
            {menuItems &&
              menuItems.map((menuItem, index) => (
                <NavItem
                  key={index}
                  menuItem={menuItem}
                  isOpen={isOpen}
                  menuItemClick={toggleMenu}
                />
              ))}
          </nav>
        </div>
      </header>
      <div
        className={`fixed top-[30px] left-[35px] z-20 flex h-[35px] w-[40px] hover:cursor-pointer sm:hidden ${isOpen ? 'translate-x-[135px]' : ''}`}
        onClick={toggleMenu}
      >
        <div
          className={`absolute top-0 h-[3px] rounded-xl opacity-100 ${isOpen ? 'bg-primary top-[12px] left-1/2 w-0' : 'left-0 w-full bg-white'}`}
        ></div>
        <div
          className={`absolute top-[12px] left-0 h-[3px] w-full rounded-xl opacity-100 ${isOpen ? 'bg-primary rotate-45' : 'bg-white'}`}
        ></div>
        <div
          className={`absolute top-[12px] left-0 h-[3px] w-full rounded-xl opacity-100 ${isOpen ? 'bg-primary -rotate-45' : 'bg-white'}`}
        ></div>
        <div
          className={`absolute top-[24px] h-[3px] rounded-xl opacity-100 ${isOpen ? 'bg-primary top-[12px] left-1/2 w-0' : 'left-0 w-full bg-white'}`}
        ></div>
      </div>
    </>
  );
}
