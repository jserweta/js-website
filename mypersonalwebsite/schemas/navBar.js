export default {
  name: 'navBar',
  title: 'NavBar',
  type: 'document',
  fields: [
  //  {
  //   name: 'navbarItems',
  //   title: 'Navbar items',
  //    type: 'array',
  //    of: [
  //      {
  //       type: 'navBarItem'
  //      }
  //    ]
  //  }
  {
    title: 'Item name',
    name: 'navItemName',
    type: 'string'
  },
  {
    title: 'Item link',
    name: 'navItemLink',
    type: 'string'
  },
  {
    title: 'Item icon',
    name: 'navItemIcon',
    type: 'image'
  }
  ],
  preview: {
    select: {
      title: "navItemName"
    }
  }
}