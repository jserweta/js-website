'use client';

import {useNav} from '@/app/hooks/useNav';
import type {PortableTextBlock} from 'next-sanity';
import {AboutSectionQueryResult, SocialIconsQueryResult} from '../../../sanity.types';
import {CustomPortableText} from '../CustomPortableText';
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
      className="flex h-screen flex-col justify-center"
    >
      {mainHeader && backgroundHeader && (
        <SectionHeader
          header={mainHeader as PortableTextBlock[]}
          backgroundHeader={backgroundHeader}
          className="mb-12"
        />
      )}

      <div className="flex items-center justify-center gap-16">
        <div className="md:mt-10">
          <p className="mb-12 text-sm font-[300]">{content}</p>
          <div className="flex items-center justify-end gap-11">
            <h3 className="font-futura text-primary m-0 text-2xl">{cta}</h3>
            <SocialMediaIcons socialIconsData={socialIconsData} />
          </div>
        </div>
        <div className="relative">
          {image && (
            <ImageWrapper
              image={image}
              alt="My Portrait"
              size="300px"
              width={285}
              height={380}
              classesWrapper="h-auto sm:w-full md:w-[285px]"
            />
          )}
          <div className="absolute bottom-[-20%] left-[-15%] z-10 m-0 flex h-[166px] w-[172px] items-center justify-center after:absolute after:top-0 after:left-0 after:-z-10 after:h-full after:w-full after:bg-[url('/background-path.svg')] after:content-['']">
            <p className="font-futura relative m-0 text-center text-[28px] leading-6 font-[700]">
              {imageCaption} <br /> <span className="text-[21px] font-[300]">of experience</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
