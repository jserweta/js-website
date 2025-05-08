import {HighlightDecorator} from '@/sanity/components/HighlightDecorator';
import {defineArrayMember, defineField} from 'sanity';

export default {
  name: 'sectionHeader',
  title: 'SectionHeader',
  type: 'object',
  fields: [
    defineField({
      title: 'Main header',
      name: 'mainHeader',
      type: 'array',
      of: [
        defineArrayMember({
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
        }),
      ],
    }),
    defineField({
      title: 'Background header',
      name: 'backgroundHeader',
      type: 'string',
    }),
  ],
};
