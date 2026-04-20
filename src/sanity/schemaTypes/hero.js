const hero = {
  name: "hero", // MUST match page schema type
  title: "Hero",
  type: "object", // CRITICAL (NOT document)

  fields: [
    {
      name: "headline",
      title: "Headline",
      type: "string",
    },
    {
      name: "subtext",
      title: "Subtext",
      type: "text",
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
};

export default hero;
