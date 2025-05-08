import {defineQuery} from 'next-sanity';

export const heroSectionQuery = defineQuery(`
  *[_type == "home"][0]['heroSection']{
    _id,
    sectionId,
    image,
    header,
    profession
  }
`);
