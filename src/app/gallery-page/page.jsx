import React from "react";
import HeroSection from "./HeroSection";
import GallerySection from "./GallerySection";

import CtaSection from "./CtaSection";

const Gallery = () => {
  return (
    <div id="main-content" className="pt-20">
      <HeroSection />
      <GallerySection />
      <CtaSection />
    </div>
  );
};

export default Gallery;
