'use client';

import {init} from 'ityped';
import {useEffect, useRef} from 'react';

export default function MotionText({profession}: {profession: string[]}) {
  const motionTextRef = useRef(null);

  // Motion text init
  useEffect(() => {
    if (motionTextRef.current) {
      init(motionTextRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: profession,
      });
    }
  }, []);

  return (
    <p className="m-0 h-[100px] text-[40px] md:h-auto">
      I'm a <span className="text-primary" ref={motionTextRef}></span>
    </p>
  );
}
