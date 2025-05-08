import {defineQuery} from 'next-sanity';

export const ctaSectionQuery = defineQuery(`
  *[_type == "home"][0]['resumeCTASection']{
    _id,
    ctaContent,
    ctaButton,
    buttonLink,
    "downloadFile": downloadFile.asset->url
  }
`);
