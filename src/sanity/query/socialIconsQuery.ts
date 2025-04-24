import {defineQuery} from 'next-sanity';

export const socialIconsQuery = defineQuery(`
  *[_type == "settings"][0]{
    _id,
    _type,
    socialIcons[]{
      _key,
      "iconURL": icon.asset->url,
      url
    },
  }
`);
