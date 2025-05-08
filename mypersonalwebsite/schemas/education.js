export default {
  name: 'education',
  title: 'Education',
  type: 'object',
  fields: [
    {
      name: 'sectionHeader',
      title: 'Section header',
      type: 'sectionHeader',
    },
    {
      name: 'eduList',
      title: 'Education list',
      type: 'array',
      of: [{type: 'educationItem'}],
    },
  ]
}