import React from "react";

const CtaSection = () => {
  return (
    <section
      id="cta-section"
      className="py-24 bg-brand-light relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-navy/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-360 mx-auto px-6 lg:px-12 relative z-10 text-center">
        <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-soft flex items-center justify-center text-brand-red mb-8 border border-gray-100">
          <i className="fa-solid fa-shield-check text-4xl"></i>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6 tracking-tight">
          Need Professional Security Services?
        </h2>
        <p className="text-xl text-brand-gray mb-10 max-w-2xl mx-auto">
          Secure your assets, events, and personnel with our highly trained
          professionals and state-of-the-art technology.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="px-10 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-brand-red/20 text-lg flex items-center gap-3 w-full sm:w-auto">
            Request a Quote <i className="fa-solid fa-arrow-right"></i>
          </button>
          <a
            href="tel:+254700000000"
            className="px-10 py-4 bg-white text-brand-navy font-bold rounded-full hover:bg-gray-50 transition-colors shadow-soft border border-gray-200 text-lg flex items-center gap-3 w-full sm:w-auto"
          >
            Call Us Now <i className="fa-solid fa-phone"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
