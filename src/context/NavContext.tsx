'use client';

import {createContext, Dispatch, ReactNode, SetStateAction, useState} from 'react';

type NavContextType = {
  activeNavItem: string;
  setActiveNavItem: Dispatch<SetStateAction<string>>;
};

const NavContext = createContext<NavContextType | undefined>(undefined);

export default function NavProvider({children}: {children: ReactNode}) {
  const [activeNavItem, setActiveNavItem] = useState<string>('');

  const providerValue = {
    activeNavItem,
    setActiveNavItem,
  };

  return <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>;
}
