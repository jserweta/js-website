import {defineQuery} from 'next-sanity';

export const footerInfoQuery = defineQuery(`
  *[_type == "settings"][0]{
    _id,
    _type,
    footer,
  }
`);
