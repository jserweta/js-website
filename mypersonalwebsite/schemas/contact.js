export default {
  name: 'contact',
  title: 'Contact',
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
      name: 'contactForm',
      title: 'Contact form'
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
     title: 'Description',
     type: 'text',
     group: 'mainContent'
   },
   {
     name: 'contactDetails',
     title: 'Contact details',
     type: 'array',
     of: [{type: 'iconTextField'}],
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