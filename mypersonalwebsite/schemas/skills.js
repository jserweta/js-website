export default {
  name: 'skills',
  title: 'Skills',
  type: 'object',
  fields: [
    {
      name: 'sectionHeader',
      title: 'Section header',
      type: 'sectionHeader',
    },
    {
      name: 'skillsList',
      title: 'Skills list',
      type: 'array',
      of: [{type: 'skillItem'}]
    },
  ]
}