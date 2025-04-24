import {HighlightDecorator} from '@/sanity/components/HighlightDecorator';
import {CogIcon} from '@sanity/icons';
import {defineArrayMember, defineField, defineType} from 'sanity';

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your personal website.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'overview',
      description: 'Used for the <meta> description tag for SEO.',
      title: 'Description',
      type: 'array',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
          type: 'block',
          styles: [],
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
            // decorators: [
            //   {
            //     title: "Italic",
            //     value: "em",
            //   },
            //   {
            //     title: "Strong",
            //     value: "strong",
            //   },
            // ],
          },
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      description: 'Logo of website displayed above navigation',
      type: 'image',
    }),
    defineField({
      name: 'menuItems',
      title: 'Menu Item list',
      description: 'Links displayed on the header of your site.',
      type: 'array',
      of: [
        {
          title: 'Reference',
          type: 'reference',
          to: [
            {
              type: 'home',
            },
          ],
        },
        {
          name: 'anchorMenuItem',
          type: 'object',
          title: 'Anchor Menu Item',
          fields: [
            {
              name: 'icon',
              type: 'file',
              title: 'SVG Icon',
              options: {
                accept: 'image/svg+xml',
              },
            },
            {
              name: 'title',
              type: 'string',
              title: 'Label',
            },
            {
              name: 'anchorId',
              type: 'string',
              title: "Section ID (e.g. 'about', 'services')",
              description: 'This should match the id of the section in your HTML (e.g. #about)',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      title: 'Social Icons',
      name: 'socialIcons',
      type: 'array',
      of: [{type: 'iconWithText'}],
    }),
    defineField({
      name: 'footer',
      description: 'This is a block of text that will be displayed at the bottom of the page.',
      title: 'Footer Info',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
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
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Displayed on social cards and search engine results.',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings',
        subtitle: 'Logo, Menu Items, Footer Info, and Open Graph Image',
      };
    },
  },
});
