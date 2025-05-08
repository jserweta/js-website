import {defineQuery} from 'next-sanity';

export const contactSectionQuery = defineQuery(`
  *[_type == "home"][0]['contactSection']{
    _id,
    sectionId,
    sectionHeader {
      mainHeader,
      backgroundHeader
    },
    content,
    contactDetails[] {
      _key,
      "iconURL": icon.asset->url,
      url
    },
  }
`);
