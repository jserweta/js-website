import {defineQuery} from 'next-sanity';

export const educationSectionQuery = defineQuery(`
  *[_type == "home"][0]['educationSection']{
    _id,
    sectionId,
    sectionHeader {
      mainHeader,
      backgroundHeader
    },
    eduList[] {
      _key,
      degree,
      graduationDate,
      content,
    },
  }
`);
