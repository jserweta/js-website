'use client';

import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from 'react';

export type NavContextType = {
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

export const useNavContext = () => {
  const context = useContext(NavContext);

  if (!context) {
    throw new Error('useNavContext must be used within a NavProvider');
  }

  return context;
};
