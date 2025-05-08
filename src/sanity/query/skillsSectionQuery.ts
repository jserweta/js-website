import {defineQuery} from 'next-sanity';

export const skillsSectionQuery = defineQuery(`
  *[_type == "home"][0]['skillsSection']{
    _id,
    sectionId,
    sectionHeader {
      mainHeader,
      backgroundHeader
    },
    skillsList[] {
      _key,
      "iconURL": icon.asset->url,
      url
    },
  }
`);
