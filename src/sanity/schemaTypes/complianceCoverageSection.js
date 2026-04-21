const complianceCoverageSection = {
  name: "complianceCoverageSection",
  title: "Compliance & Coverage Section",
  type: "object",
  fields: [
    // LEFT SIDE → COMPLIANCE
    {
      name: "compliance",
      title: "Compliance Block",
      type: "object",
      fields: [
        { name: "icon", type: "string" },
        { name: "title", type: "string" },
        { name: "description", type: "text" },

        {
          name: "badge",
          type: "object",
          fields: [
            { name: "icon", type: "string" },
            { name: "title", type: "string" },
            { name: "subtitle", type: "string" },
          ],
        },
      ],
    },

    // RIGHT SIDE → COVERAGE
    {
      name: "coverage",
      title: "Coverage Block",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        { name: "icon", type: "string" },
        { name: "description", type: "text" },

        {
          name: "locations",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "icon", type: "string" },
                { name: "label", type: "string" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default complianceCoverageSection;
