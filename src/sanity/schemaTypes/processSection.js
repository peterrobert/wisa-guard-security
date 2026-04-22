const processSection = {
  name: "processSection",
  title: "Process Section",
  type: "object",

  fields: [
    {
      name: "tagline",
      type: "string",
    },
    {
      name: "title",
      type: "string",
    },
    {
      name: "description",
      type: "text",
    },

    // STEPS
    {
      name: "steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "number", type: "number" },
            { name: "title", type: "string" },
            { name: "description", type: "text" },
            { name: "highlight", type: "boolean" },
          ],
        },
      ],
    },

    // IMAGE
    {
      name: "image",
      type: "image",
      options: { hotspot: true },
    },

    // BADGE
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
};

export default processSection;
