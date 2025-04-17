import type { Image } from "sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "./env";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlForImage = (source: Image | null | undefined) => {
  // Ensure that source image contains a valid reference
  if (!source?.asset?._ref) {
    return undefined;
  }

  return imageBuilder?.image(source).auto("format").fit("max");
};

export function urlForOpenGraphImage(image: Image | null | undefined) {
  return urlForImage(image)?.width(1200).height(627).fit("crop").url();
}

export function resolveHref(
  documentType?: string,
  slug?: string | null,
): string | undefined {
  switch (documentType) {
    case "home":
      return "/";
    default:
      console.warn("Invalid document type:", documentType);
      return undefined;
  }
}
