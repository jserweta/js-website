import {defineQuery} from 'next-sanity'

export const socialIconsQuery = defineQuery(`
  *[_type == "settings"][0]{
    _id,
    _type,
    socialIcons[]{
      _key,
      ...@->{
        _type,
        icon,
        text
      }
    },
  }
`)
