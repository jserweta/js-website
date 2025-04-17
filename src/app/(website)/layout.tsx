import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { DraftModeToast } from "@/components/DraftModeToast";
import { toPlainText, VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { handleError } from "@/sanity/lib/handleError";
import { urlForOpenGraphImage } from "@/sanity/lib/utils";
import type { Metadata } from "next";
import { metadataQuery } from "@/sanity/query/metadataQuery";
import { Image } from "sanity";

export async function generateMetadata(): Promise<Metadata> {
  const { data: metadataValues } = await sanityFetch({
    query: metadataQuery,
    stega: false,
  });
  const ogImage = urlForOpenGraphImage(metadataValues?.ogImage as Image);
  return {
    title: metadataValues?.title
      ? {
          template: `%s | ${metadataValues.title}`,
          default: metadataValues.title || "Personal website",
        }
      : undefined,
    description: metadataValues?.overview
      ? toPlainText(metadataValues.overview)
      : undefined,
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
    <main className="min-h-screen">
      {children}
      <SanityLive onError={handleError} />
      {(await draftMode()).isEnabled && (
        <>
          <DraftModeToast />
          <VisualEditing />
        </>
      )}
    </main>
  );
}
