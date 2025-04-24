import {HighlightDecorator} from '@/sanity/components/HighlightDecorator';

export default {
  name: 'sectionHeader',
  title: 'SectionHeader',
  type: 'object',
  fields: [
    {
      title: 'Main header',
      name: 'mainHeader',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              {
                title: 'Highlight',
                value: 'highlight',
                icon: () => 'H',
                component: ({children}: {children: React.ReactNode}) => (
                  <HighlightDecorator>{children}</HighlightDecorator>
                ),
              },
            ],
          },
        },
      ],
    },
    {
      title: 'Background header',
      name: 'backgroundHeader',
      type: 'string',
    },
  ],
};
