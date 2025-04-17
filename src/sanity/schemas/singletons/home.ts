import {HomeIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  groups: [
    {
      name: 'heroSection',
      title: 'Hero Section',
    },
    {
      name: 'aboutSection',
      title: 'About Section',
    },
    {
      name: 'educationSection',
      title: 'Education Section',
    },
    {
      name: 'experienceSection',
      title: 'Experience Section',
    },
    {
      name: 'skillsSection',
      title: 'Skills Section',
    },
    {
      name: 'resumeCTASection',
      title: 'Resume CTA Section',
    },
    {
      name: 'contactSection',
      title: 'Contact Section',
    },
  ],
  fields: [
    {
      name: 'heroSection',
      title: 'Hero Section',
      type: 'heroSection',
      group: 'heroSection',
    },
    {
      name: 'aboutSection',
      title: 'About Section',
      type: 'aboutSection',
      group: 'aboutSection',
    },
    {
      name: 'educationSection',
      title: 'Education Section',
      type: 'educationSection',
      group: 'educationSection',
    },
    {
      name: 'experienceSection',
      title: 'Experience Section',
      type: 'experienceSection',
      group: 'experienceSection',
    },
    {
      name: 'skillsSection',
      title: 'Skills Section',
      type: 'skillsSection',
      group: 'skillsSection',
    },
    {
      name: 'resumeCTASection',
      title: 'Resume CTA Section',
      type: 'resumeCTASection',
      group: 'resumeCTASection',
    },
    {
      name: 'contactSection',
      title: 'Contact Section',
      type: 'contactSection',
      group: 'contactSection',
    },

    // defineField(),
    // defineField({
    //   name: "showcaseProjects",
    //   title: "Showcase projects",
    //   description:
    //     "These are the projects that will appear first on your landing page.",
    //   type: "array",
    //   of: [
    //     defineArrayMember({
    //       type: "reference",
    //       to: [{ type: "project" }],
    //     }),
    //   ],
    // }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        subtitle: 'Home',
        title,
      }
    },
  },
})
