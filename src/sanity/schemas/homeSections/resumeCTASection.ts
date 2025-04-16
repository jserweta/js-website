import type { Rule } from "sanity";

export default {
  name: "resumeCTASection",
  type: "object",
  fields: [
    {
      name: "ctaContent",
      title: "Content of cta",
      type: "text",
    },
    {
      name: "ctaButton",
      title: "Button text",
      type: "string",
    },
    {
      name: "buttonLink",
      title: "Link for CTA button",
      type: "url",

      validation: (Rule: Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel", "#"],
        }),
    },
    {
      name: "downloadFile",
      title: "File to download",
      type: "file",
    },
  ],
};
