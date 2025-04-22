'use client';

import {RefObject, useEffect, useState} from 'react';

export const useIsOnScreen = (ref: RefObject<HTMLElement | null>) => {
  const [isOnScreen, setOnScreen] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), {
      threshold: [0.25, 0.5, 0.75],
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  });

  return isOnScreen;
};
