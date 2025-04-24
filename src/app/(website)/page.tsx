import AboutMe from '@/components/homeSections/AboutMe';
import Hero from '@/components/homeSections/Hero';
import Resume from '@/components/homeSections/Resume';
import {sanityFetch} from '@/sanity/lib/live';
import {aboutSectionQuery} from '@/sanity/query/aboutMeSectionQuery';
import {heroSectionQuery} from '@/sanity/query/heroSectionQuery';
import {socialIconsQuery} from '@/sanity/query/socialIconsQuery';

export default async function Page() {
  const {data: heroSectionData} = await sanityFetch({query: heroSectionQuery});
  const {data: aboutMeSectionData} = await sanityFetch({query: aboutSectionQuery});
  const {data: socialIconsData} = await sanityFetch({query: socialIconsQuery});

  return (
    <>
      <Hero data={heroSectionData} />
      <AboutMe data={aboutMeSectionData} socialIconsData={socialIconsData} />
      <Resume />
    </>
  );
}
