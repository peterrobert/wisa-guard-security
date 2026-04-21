import Navbar from "@/components/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
import ServiceOverview from "./ServiceOverview";
import BenifitsSection from "./BenifitsSection";

const ServiceDetail = () => {
  return (
    <>
      <Navbar />
      <div id="main-content" className="pt-20">
        <HeroSection />
        <ServiceOverview />
        <BenifitsSection />
      </div>
    </>
  );
};

export default ServiceDetail;
