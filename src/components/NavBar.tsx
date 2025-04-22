import {studioUrl} from '@/sanity/lib/env';
import {createDataAttribute} from 'next-sanity';
import {NavbarQueryResult} from '../../sanity.types';
import ImageWrapper from './ImageWrapper';
import NavItem from './NavItem';
import {OptimisticSortOrder} from './OptimisticSortOrder';

export default function NavBar({data}: {data: NavbarQueryResult}) {
  const {logo, menuItems} = data ?? {};
  const dataAttribute =
    data?._id && data?._type
      ? createDataAttribute({
          baseUrl: studioUrl,
          id: data._id,
          type: data._type,
        })
      : null;

  return (
    <header
      className="before:bg-card fixed top-0 z-10 h-full w-(--nav-max-width) before:absolute before:top-0 before:right-0 before:h-screen before:w-[calc(100vw-var(--site-max-width)/2)] before:content-['']"
      data-sanity={dataAttribute?.('menuItems')}
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
              classesWrapper="mb-12 h-auto w-[115px]"
            />
          )}
          {menuItems && (
            <OptimisticSortOrder id={data?._id!} path="menuItems">
              {menuItems.map((menuItem, index) => (
                <NavItem
                  key={index}
                  menuItem={menuItem}
                  // menuItemClick={toggleMenu}
                />
              ))}
            </OptimisticSortOrder>
          )}
        </nav>
      </div>
    </header>
  );
}
