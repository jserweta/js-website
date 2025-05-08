import {defineQuery} from 'next-sanity';

export const navbarQuery = defineQuery(`
  *[_type == "settings"][0]{
    _id,
    _type,
    logo,
    menuItems[]{
      _key,
      _type == "anchorMenuItem" => {
        _type,
        "iconURL": icon.asset->url,
        title,
        anchorId
      },
      // fallback for references
      _type != "anchorMenuItem" => {
        "_type": @->_type,
        "slug": @->slug.current,
        "title": @->title
      }
    }
  }
`);
