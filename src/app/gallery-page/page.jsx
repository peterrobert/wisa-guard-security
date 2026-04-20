import React from "react";
import HeroSection from "./HeroSection";
import GallerySection from "./GallerySection";

import CtaSection from "./CtaSection";
import Navbar from "@/components/Navbar";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <div id="main-content" className="pt-20">
        <HeroSection />
        <GallerySection />
        <CtaSection />
      </div>
    </>
  );
};

export default Gallery;
