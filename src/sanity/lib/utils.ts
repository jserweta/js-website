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
