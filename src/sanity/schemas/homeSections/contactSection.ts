export default {
  name: "contactSection",
  title: "Contact",
  type: "object",
  fields: [
    {
      name: "sectionHeader",
      title: "Section header",
      type: "sectionHeader",
    },
    {
      name: "content",
      title: "Description",
      type: "text",
    },
    {
      name: "contactDetails",
      title: "Contact details",
      type: "array",
      of: [{ type: "iconWithText" }],
    },
  ],
};
