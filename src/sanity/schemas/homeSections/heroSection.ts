export default {
  name: "heroSection",
  type: "object",
  fields: [
    {
      title: "Image",
      name: "image",
      type: "image",
    },
    {
      title: "Main header",
      name: "header",
      type: "string",
    },
    {
      title: "My professions",
      name: "profession",
      type: "array",
      of: [{ name: "profName", type: "string" }],
    },
  ],
};
