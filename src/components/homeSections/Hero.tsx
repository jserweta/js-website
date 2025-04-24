'use client';

import {useNav} from '@/app/hooks/useNav';
import {HeroSectionQueryResult} from '../../../sanity.types';
import ImageWrapper from '../ImageWrapper';
import MotionText from '../MotionText';

export default function Hero({data}: {data: HeroSectionQueryResult}) {
  const {sectionId, header, profession, image} = data || {};
  const sectionRef = useNav('Home');

  return (
    <section
      id={sectionId || ''}
      ref={sectionRef}
      className="font-futura flex h-screen items-center justify-center pt-7 pb-7 text-center md:pt-0 md:pb-0"
    >
      <div className="flex flex-col items-center justify-center">
        {image && (
          <ImageWrapper
            image={image}
            size="300px"
            width={300}
            height={290}
            classesWrapper="mb-12 h-auto w-3/5 sm:w-[300px]"
          />
        )}

        <h1 className="text-5xl font-[500] sm:text-7xl">{header}</h1>
        {profession && <MotionText profession={profession} />}
      </div>
    </section>
  );
}
