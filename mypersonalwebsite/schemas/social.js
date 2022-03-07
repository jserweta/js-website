export default {
  name: 'socialMedia',
  title: 'Social media',
  type: 'document',
  fields: [
    {
      title: 'Facebook',
      name: 'facebook',
      type: 'url'
    },
    {
      title: 'LinkedIn',
      name: 'linkedin',
      type: 'url'
    },
    {
      title: 'GitHub',
      name: 'github',
      type: 'url'
    }
  ],
  preview: {
    select:{
      title: 'title'
    },
    prepare() {
      return {
        title: 'Social media'
      }
    }
  }
}