export default {
  name: "educationSection",
  title: "Education",
  type: "object",
  fields: [
    {
      name: "sectionHeader",
      title: "Section header",
      type: "sectionHeader",
    },
    {
      name: "eduList",
      title: "Education list",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Education degree",
              name: "degree",
              type: "string",
            },
            {
              title: "Graduation date",
              name: "graduationDate",
              type: "string",
            },
            {
              title: "Short description",
              name: "content",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
};
