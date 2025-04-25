import AboutMe from '@/components/homeSections/AboutMe';
import Hero from '@/components/homeSections/Hero';
import Resume from '@/components/homeSections/Resume';
import {sanityFetch} from '@/sanity/lib/live';
import {aboutSectionQuery} from '@/sanity/query/aboutMeSectionQuery';
import {educationSectionQuery} from '@/sanity/query/educationSectionQuery';
import {experienceSectionQuery} from '@/sanity/query/experienceSectionQuery';
import {heroSectionQuery} from '@/sanity/query/heroSectionQuery';
import {skillsSectionQuery} from '@/sanity/query/skillsSectionQuery';
import {socialIconsQuery} from '@/sanity/query/socialIconsQuery';

export default async function Page() {
  const {data: heroSectionData} = await sanityFetch({query: heroSectionQuery});
  const {data: aboutMeSectionData} = await sanityFetch({query: aboutSectionQuery});
  const {data: socialIconsData} = await sanityFetch({query: socialIconsQuery});
  const {data: educationSectionData} = await sanityFetch({query: educationSectionQuery});
  const {data: experienceSectionData} = await sanityFetch({query: experienceSectionQuery});
  const {data: skillsSectionData} = await sanityFetch({query: skillsSectionQuery});

  return (
    <>
      <Hero data={heroSectionData} />
      <AboutMe data={aboutMeSectionData} socialIconsData={socialIconsData} />
      <Resume
        educationSectionData={educationSectionData}
        experienceSectionData={experienceSectionData}
        skillsSectionData={skillsSectionData}
      />
    </>
  );
}
