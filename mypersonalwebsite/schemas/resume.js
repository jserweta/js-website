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
      name: 'sectionHeader',
      title: 'Section header',
      type: 'sectionHeader',
      group: 'education'
    },
    {
      name: 'eduList',
      title: 'Education list',
      type: 'array',
      of: [{type: 'educationItem'}],
      group: 'education'
    },
    {
      name: 'experienceList',
      title: 'Experience list',
      type: 'array',
      of: [{type: 'experienceItem'}],
      group: 'experience'
    },
    {
      name: 'skillsList',
      title: 'Skills list',
      type: 'array',
      of: [{type: 'skillItem'}],
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
      type: 'text',
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
      title: 'sectionHeader.header',
      subtitle: 'sectionHeader.subHeader'
    }
  }
}