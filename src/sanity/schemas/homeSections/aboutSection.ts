export default {
  name: 'aboutSection',
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
      title: 'Description about me',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'cta',
      title: 'Call to action',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      name: 'imageCaption',
      title: 'Image caption',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
};
