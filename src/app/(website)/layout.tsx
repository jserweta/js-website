import {DraftModeToast} from '@/components/DraftModeToast';
import NavBar from '@/components/NavBar';
import NavProvider from '@/context/NavContext';
import {handleError} from '@/sanity/lib/handleError';
import {sanityFetch, SanityLive} from '@/sanity/lib/live';
import {urlForOpenGraphImage} from '@/sanity/lib/utils';
import {metadataQuery} from '@/sanity/query/metadataQuery';
import type {Metadata} from 'next';
import {toPlainText, VisualEditing} from 'next-sanity';
import {draftMode} from 'next/headers';
import {Image} from 'sanity';

export async function generateMetadata(): Promise<Metadata> {
  const {data: metadataValues} = await sanityFetch({
    query: metadataQuery,
    stega: false,
  });
  const ogImage = urlForOpenGraphImage(metadataValues?.ogImage as Image);
  return {
    title: metadataValues?.title
      ? {
          template: `%s | ${metadataValues.title}`,
          default: metadataValues.title || 'Personal website',
        }
      : undefined,
    description: metadataValues?.overview ? toPlainText(metadataValues.overview) : undefined,
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-background after:bg-background relative mx-auto after:absolute after:top-0 after:right-[calc((100vw-var(--site-max-width))/-2)] after:h-full after:w-[calc(100vw-var(--site-max-width)/2)] after:content-['']">
      <NavProvider>
        <NavBar />
        <main className="relative z-10 ml-0 px-10 sm:ml-14 lg:ml-[calc(var(--nav-max-width)/6)] xl:ml-(--nav-max-width) xl:px-14">
          {children}
        </main>
      </NavProvider>

      <SanityLive onError={handleError} />
      {(await draftMode()).isEnabled && (
        <>
          <DraftModeToast />
          <VisualEditing />
        </>
      )}
    </div>
  );
}
