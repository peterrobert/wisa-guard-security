import React from "react";

const MapSection = () => {
  return (
    <section id="office-map" className="py-24 bg-brand-light relative">
      <div className="absolute inset-0 grid-bg pointer-events-none"></div>

      <div className="max-w-360 mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-red tracking-wider uppercase mb-3">
            Find Us
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Visit Our Headquarters
          </h3>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto">
            Secure parking available for all clients visiting Suraj Plaza.
          </p>
        </div>

        <div className="w-full h-150 rounded-3xl overflow-hidden shadow-hover border border-gray-200 relative bg-white">
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center flex-col gap-4">
            <i className="fa-solid fa-map-location-dot text-6xl text-brand-gray/30"></i>
            <p className="text-brand-gray font-medium">
              Interactive Map: Suraj Plaza, Ngara
            </p>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.826727720973!2d36.8188176!3d-1.277432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f172cfc8b0933%3A0xb129bb8877bc9!2sSuraj%20Plaza%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
