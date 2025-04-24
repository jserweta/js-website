import {defineQuery} from 'next-sanity';

export const aboutSectionQuery = defineQuery(`
  *[_type == "home"][0]['aboutSection']{
    _id,
    sectionId,
    sectionHeader {
      mainHeader,
      backgroundHeader
    },
    content,
    cta,
    image,
    imageCaption
  }
`);
