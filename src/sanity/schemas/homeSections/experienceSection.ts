export default {
  name: "experienceSection",
  title: "Experience",
  type: "object",
  fields: [
    {
      name: "sectionHeader",
      title: "Section header",
      type: "sectionHeader",
    },
    {
      name: "experienceList",
      title: "Experience list",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Job position",
              name: "jobPosition",
              type: "string",
            },
            {
              title: "Work start",
              name: "workStartDate",
              type: "date",
              options: {
                dateFormat: "YYYY-MM",
              },
            },
            {
              title: "Work end",
              name: "workEndDate",
              type: "date",
              options: {
                dateFormat: "YYYY-MM",
              },
            },
            {
              title: "Company name",
              name: "companyName",
              type: "string",
            },
            {
              title: "Company logo",
              name: "companyLogo",
              type: "image",
            },
          ],
        },
      ],
    },
  ],
};
