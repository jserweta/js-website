import { defineQuery } from "next-sanity";

export const metadataQuery = defineQuery(`
  *[_type == "settings"][0]{
    _id,
    _type,
    title,
    overview,
    ogImage,
    footer,
  }
`);
