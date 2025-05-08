import AboutMe from '@/components/homeSections/AboutMe';
import Contact from '@/components/homeSections/Contact';
import Hero from '@/components/homeSections/Hero';
import Resume from '@/components/homeSections/Resume';
import {sanityFetch} from '@/sanity/lib/live';
import {aboutSectionQuery} from '@/sanity/query/aboutMeSectionQuery';
import {contactSectionQuery} from '@/sanity/query/contactSectionQuery';
import {ctaSectionQuery} from '@/sanity/query/ctaSectionQuery';
import {educationSectionQuery} from '@/sanity/query/educationSectionQuery';
import {experienceSectionQuery} from '@/sanity/query/experienceSectionQuery';
import {heroSectionQuery} from '@/sanity/query/heroSectionQuery';
import {skillsSectionQuery} from '@/sanity/query/skillsSectionQuery';
import {socialIconsQuery} from '@/sanity/query/socialIconsQuery';

export default async function Page() {
  let heroSectionData,
    aboutMeSectionData,
    socialIconsData,
    educationSectionData,
    experienceSectionData,
    skillsSectionData,
    ctaSectionData,
    contactSectionData;

  try {
    [
      {data: heroSectionData},
      {data: aboutMeSectionData},
      {data: socialIconsData},
      {data: educationSectionData},
      {data: experienceSectionData},
      {data: skillsSectionData},
      {data: ctaSectionData},
      {data: contactSectionData},
    ] = await Promise.all([
      sanityFetch({query: heroSectionQuery}),
      sanityFetch({query: aboutSectionQuery}),
      sanityFetch({query: socialIconsQuery}),
      sanityFetch({query: educationSectionQuery}),
      sanityFetch({query: experienceSectionQuery}),
      sanityFetch({query: skillsSectionQuery}),
      sanityFetch({query: ctaSectionQuery}),
      sanityFetch({query: contactSectionQuery}),
    ]);
  } catch (error) {
    console.error('Failed data fetch from Sanity: ', error);

    return null;
  }

  return (
    <>
      <Hero data={heroSectionData} />
      <AboutMe data={aboutMeSectionData} socialIconsData={socialIconsData} />
      <Resume
        educationSectionData={educationSectionData}
        experienceSectionData={experienceSectionData}
        skillsSectionData={skillsSectionData}
        ctaSectionData={ctaSectionData}
      />
      <Contact data={contactSectionData} />
    </>
  );
}
