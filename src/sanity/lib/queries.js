export const homePageQuery = `
*[_type == "page" && slug.current == "home-page"][0]{
  title,
  sections[]{
    ...,

    _type == "hero" => {
      headline,
      subtext,
      backgroundImage{
        asset->{
          url
        }
      }
    },

    _type == "whyChooseUs" => {
      tagline,
      title,
      description,
      features[]{
        title,
        description,
        icon
      }
    }
  }
}
`;
