'use client';

import {useNavContext} from '@/context/NavContext';
import {RefObject, useEffect, useRef} from 'react';
import {useIsOnScreen} from './useIsOnScreen';

export const useNav = (navItem: string): RefObject<HTMLElement | null> => {
  const ref = useRef<HTMLElement | null>(null);

  const {setActiveNavItem} = useNavContext();

  const isOnScreen = useIsOnScreen(ref);

  useEffect(() => {
    if (isOnScreen) {
      setActiveNavItem(navItem);
    }
  }, [isOnScreen, setActiveNavItem, navItem]);

  return ref;
};
