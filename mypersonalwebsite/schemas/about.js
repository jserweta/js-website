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
   },
   {
     name: 'socialMedia',
     title: 'Social media',
     type: 'social',
     group: 'socialMedia'
   }


  ],
  preview: {
    select:{
      title: 'sectionHeader.header',
      subtitle: 'sectionHeader.subHeader'
    }
  }
}