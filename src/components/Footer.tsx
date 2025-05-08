import {sanityFetch} from '@/sanity/lib/live';
import {footerInfoQuery} from '@/sanity/query/footerInfoQuery';
import type {PortableTextBlock} from 'next-sanity';
import {CustomPortableText} from './CustomPortableText';

export default async function Footer() {
  const {data} = await sanityFetch({query: footerInfoQuery});
  const {footer} = data ?? {};

  return (
    <footer className="font-futura bg-background relative z-10 ml-0 p-5 px-5 py-10 text-center text-lg sm:ml-14 lg:ml-[calc(var(--site-max-width)/6)] xl:ml-(--nav-max-width)">
      <CustomPortableText value={footer as PortableTextBlock[]} />
    </footer>
  );
}
