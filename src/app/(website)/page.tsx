import Hero from '@/components/homeSections/Hero';
import {sanityFetch} from '@/sanity/lib/live';
import {heroSectionQuery} from '@/sanity/query/heroSectionQuery';

export default async function Page() {
  const {data: heroSectionData} = await sanityFetch({query: heroSectionQuery});

  return <Hero data={heroSectionData} />;
}
