import {cn} from '@/lib/utils/cn';
import type {PortableTextBlock} from 'next-sanity';
import {CustomPortableText} from './CustomPortableText';

export default function SectionHeader({
  header,
  backgroundHeader,
  classMainHeader,
}: {
  header: PortableTextBlock[];
  backgroundHeader: string;
  classMainHeader?: string;
}) {
  return (
    <div className="relative mb-20 w-full">
      <span
        className={
          'font-montserrat text-background header-bg-custom-stroke z-0 text-[60px] leading-[60px] font-[900] opacity-[0.2] xl:text-[70px] xl:leading-[70px] 2xl:text-[80px] 2xl:leading-[80px]'
        }
      >
        {backgroundHeader}
      </span>
      <div
        className={cn(
          `font-futura absolute -bottom-1/2 left-0 z-10 mt-7 -translate-y-1/3 text-left text-[32px] font-[400] sm:text-[40px]`,
          classMainHeader
        )}
      >
        {header && <CustomPortableText value={header} />}
      </div>
    </div>
  );
}
