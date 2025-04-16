import React from "react";

const HighlightDecorator = ({ children }: { children: React.ReactNode }) => (
  <span className="text-primary">{children}</span>
);

export default {
  name: "sectionHeader",
  title: "SectionHeader",
  type: "object",
  fields: [
    {
      title: "Main header",
      name: "mainHeader",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            decorators: [
              {
                title: "Highlight",
                value: "highlight",
                icon: () => "H",
                component: HighlightDecorator,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Background header",
      name: "backgroundHeader",
      type: "string",
    },
  ],
};
