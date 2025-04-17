import {defineQuery} from 'next-sanity'

export const menuItemsQuery = defineQuery(`
  *[_type == "settings"][0]{
    _id,
    _type,
    logo,
    menuItems[]{
      _key,
      ...@->{
        _type,
        "slug": slug.current,
        title
      }
    },
  }
`)
