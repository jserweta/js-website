export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      title: 'Main image',
      name: 'image',
      type: 'image'
    },
    {
      title: 'Main header',
      name: 'header',
      type: 'string'
    },
    {
      title: 'My professions',
      name: 'profession',
      type: 'array',
      of: [{name:'profName', type: 'string'}]
    }
  ],
  preview: {
    select:{
      title: 'header',
    }
  }
}