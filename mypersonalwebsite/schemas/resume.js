export default {
  name: 'resume',
  title: 'Resume',
  type: 'document',
  groups: [
    {
      name: 'education',
      title: 'My education'
    },
    {
      name: 'experience',
      title: 'Job experience'
    },
    {
      name: 'skills',
      title: 'My skills'
    },
    {
      name: 'resumeCta',
      title: 'Resume CTA'
    }
  ],
  fields: [
    {
      name: 'education',
      title: 'Education',
      type: 'education',
      group: 'education'
    },
    {
      name: 'experience',
      title: 'Experience',
      type: 'experience',
      group: 'experience'
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'skills',
      group: 'skills'
    },
    {
      name: 'ctaContent',
      title: 'Content of cta',
      type: 'text',
      group: 'resumeCta'
    },
    {
      name: 'ctaButton',
      title: 'Button text',
      type: 'string',
      group: 'resumeCta'
    },
    {
      name: 'buttonLink',
      title: 'Link for CTA button',
      type: 'url',
      group: 'resumeCta',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel', '#']
      })
    },
    {
      name: 'downloadFile',
      title: 'File to download',
      type: 'file',
      group: 'resumeCta'
    },
  ],
  preview: {
    select:{
      title: 'title'
    },
    prepare() {
      return {
        title: 'Resume'
      }
    }
  }
}