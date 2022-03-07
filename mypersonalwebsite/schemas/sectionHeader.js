export default {
  name: 'sectionHeader',
  title: 'SectionHeader',
  type: 'object',
  options: {
    columns: 2
  },
  fields: [
    {
      title: 'Main header basic',
      name: 'headerBasic',
      type: 'string',
    },
    {
      title: 'Main header highlight',
      name: 'headerHighlight',
      type: 'string',
    },
    {
      title: 'Background header',
      name: 'subHeader',
      type: 'string',
    }
  ]
}