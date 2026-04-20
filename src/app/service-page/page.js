import React from "react";
import HeroSection from "./HeroSection";
import MainServices from "./MainServices";
import ProcessSection from "./ProcessSection";
import CtaSection from "./CtaSection";
import Navbar from "@/components/Navbar";

const ServicePage = () => {
  return (
    <>
      <Navbar />
      <div id="main-content" className="pt-20">
        <HeroSection />
        <MainServices />
        <ProcessSection />
        <CtaSection />
      </div>
    </>
  );
};

export default ServicePage;
