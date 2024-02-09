export default {
  name: 'about',
  title: 'About me',
  type: 'document',
  groups: [
    {
      name: 'sectionHeading',
      title: 'Section headers'
    },
    {
      name: 'mainContent',
      title: 'Main content'
    },
    {
      name: 'socialMedia',
      title: 'Social media'
    }
  ],
  fields: [
   {
     name: 'sectionHeader',
     title: 'Section header',
     type: 'sectionHeader',
     group: 'sectionHeading'
   },
   {
     name: 'content',
     title: 'Description about me',
     type: 'text',
     group: 'mainContent'
   },
   {
    name: 'cta',
    title: 'Call to action',
    type: 'string',
    group: 'mainContent'
   },
   {
     name: 'image',
     title: 'Image',
     type: 'image',
     group: 'mainContent'
   },
   {
     name: 'imageCaption',
     title: 'Image caption',
     type: 'string',
     group: 'mainContent'
   }
  ],
  preview: {
    select:{
      title: 'sectionHeader.headerBasic',
      titleSecond: 'sectionHeader.headerHighlight',
      subtitle: 'sectionHeader.subHeader'
    },
    prepare(selection) {
      const {title, titleSecond, subtitle} = selection
      return {
        title: `${title} ${titleSecond}`,
        subtitle: subtitle
      }
    }
  }
}