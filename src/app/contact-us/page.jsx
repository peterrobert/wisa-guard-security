import React from "react";
import HeroSection from "./HeroSection";
import ContactForm from "./ContactForm";
import MapSection from "./MapSection";

const ContactUs = () => {
  return (
    <div id="main-content" className="pt-20">
      <HeroSection />
      <ContactForm />
      <MapSection />
    </div>
  );
};

export default ContactUs;
