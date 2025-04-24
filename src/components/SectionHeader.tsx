import type {PortableTextBlock} from 'next-sanity';
import {CustomPortableText} from './CustomPortableText';

export default function SectionHeader({
  header,
  backgroundHeader,
}: {
  header: PortableTextBlock[];
  backgroundHeader: string;
}) {
  return (
    <div className="relative mb-20 w-full">
      <span className="font-montserrat text-background text-custom-stroke absolute top-[-25px] left-0 z-0 text-[45px] leading-[88px] font-[900] opacity-[0.2] sm:top-[-35px] sm:text-[60px] md:top-[-45px] md:text-[80px]">
        {backgroundHeader}
      </span>
      <div className="font-futura relative z-10 text-left text-[32px] font-[400] sm:text-[40px]">
        <CustomPortableText value={header} />
      </div>
    </div>
  );
}
