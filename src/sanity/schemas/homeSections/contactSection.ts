export default {
  name: 'contactSection',
  title: 'Contact',
  type: 'object',
  fields: [
    {
      title: 'Section ID',
      name: 'sectionId',
      type: 'string',
    },
    {
      name: 'sectionHeader',
      title: 'Section header',
      type: 'sectionHeader',
    },
    {
      name: 'content',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'contactDetails',
      title: 'Contact details',
      type: 'array',
      of: [{type: 'iconWithText'}],
    },
  ],
};
