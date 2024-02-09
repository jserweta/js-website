export default {
  name: 'experience',
  title: 'Experience',
  type: 'object',
  fields: [
    {
      name: 'sectionHeader',
      title: 'Section header',
      type: 'sectionHeader',
    },
    {
      name: 'experienceList',
      title: 'Experience list',
      type: 'array',
      of: [{type: 'experienceItem'}]
    },
  ]
}