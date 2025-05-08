import {defineQuery} from 'next-sanity';

export const experienceSectionQuery = defineQuery(`
  *[_type == "home"][0]['experienceSection']{
    _id,
    sectionId,
    sectionHeader {
      mainHeader,
      backgroundHeader
    },
    experienceList[] {
      _key,
      jobPosition,
      workStartDate,
      workEndDate,
      companyName,
      companyLogo,
      "logoDimensions": companyLogo.asset->metadata.dimensions
    },
  }
`);
