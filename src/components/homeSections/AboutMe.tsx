'use client';

import {useNav} from '@/app/hooks/useNav';
import type {PortableTextBlock} from 'next-sanity';
import {AboutSectionQueryResult, SocialIconsQueryResult} from '../../../sanity.types';
import ImageWrapper from '../ImageWrapper';
import SectionHeader from '../SectionHeader';
import SocialMediaIcons from '../SocialMediaIcons';

export default function AboutMe({
  data,
  socialIconsData,
}: {
  data: AboutSectionQueryResult;
  socialIconsData: SocialIconsQueryResult;
}) {
  const {sectionId, sectionHeader, content, cta, image, imageCaption} = data || {};
  const {mainHeader, backgroundHeader} = sectionHeader || {};
  const sectionRef = useNav('About me');

  return (
    <section
      id={sectionId || ''}
      ref={sectionRef}
      className="flex h-auto flex-col justify-center md:h-screen"
    >
      {mainHeader && backgroundHeader && (
        <div>
          <SectionHeader
            header={mainHeader as PortableTextBlock[]}
            backgroundHeader={backgroundHeader}
          />
        </div>
      )}

      <div className="flex flex-col-reverse items-center justify-center gap-16 md:flex-row">
        <div className="mt-10 md:mt-0">
          <p className="mb-12 text-sm font-[300]">{content}</p>
          <div className="flex items-center justify-end gap-11">
            <h3 className="font-futura text-primary m-0 text-2xl">{cta}</h3>
            <SocialMediaIcons socialIconsData={socialIconsData} />
          </div>
        </div>
        <div className="relative w-full sm:w-3/5">
          {image && (
            <ImageWrapper
              width={630}
              height={840}
              image={image}
              alt="My Portrait"
              classesWrapper="h-auto w-full md:w-[285px] md:h-[380px]"
            />
          )}
          <div className="absolute bottom-[-15%] left-[-5%] z-10 m-0 flex h-[166px] w-[172px] items-center justify-center after:absolute after:top-0 after:left-0 after:-z-10 after:h-full after:w-full after:bg-[url('/background-path.svg')] after:content-[''] sm:left-[-15%] sm:after:scale-100">
            <p className="font-futura relative m-0 text-center text-[28px] leading-6 font-[700]">
              {imageCaption}
              <br />
              <span className="text-[21px] font-[400]">of experience</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
