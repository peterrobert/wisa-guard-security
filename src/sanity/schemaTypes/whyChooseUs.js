const whyChooseUsSchema = {
  name: "whyChooseUs",
  title: "Why Choose Us",
  type: "object",
  fields: [
    {
      name: "tagline",
      title: "Small Title (Top Text)",
      type: "string",
    },
    {
      name: "title",
      title: "Main Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
            },
            {
              name: "description",
              type: "text",
            },
            {
              name: "icon",
              type: "string",
              description: "FontAwesome icon class (e.g. fa-bolt)",
            },
          ],
        },
      ],
    },
  ],
};

export default whyChooseUsSchema;
