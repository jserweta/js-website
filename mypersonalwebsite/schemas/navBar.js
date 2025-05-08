export default {
  name: 'navBar',
  title: 'NavBar',
  type: 'document',
  fields: [
  {
    title: 'Item name',
    name: 'navItemName',
    type: 'string'
  },
  {
    title: 'Item link',
    name: 'navItemLink',
    type: 'string'
  }
  ],
  preview: {
    select: {
      title: "navItemName"
    }
  }
}