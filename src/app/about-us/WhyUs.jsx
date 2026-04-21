import React from "react";

const WhyUs = ({ data }) => {
  const displayFeatures = () => {
    if (!data?.features || !Array.isArray(data.features)) return null;
    return data?.features?.map((feature, index) => (
      <div
        key={index}
        className="flex flex-col items-center text-center p-8 rounded-3xl bg-brand-light border border-gray-100 hover:shadow-hover transition-all duration-300"
      >
        <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-red mb-6">
          <i className={`fa-solid ${feature.icon} text-3xl`}></i>
        </div>
        <h4 className="text-xl font-bold text-brand-navy mb-4">
          {feature.title}
        </h4>
        <p className="text-brand-gray">{feature.description}</p>
      </div>
    ));
  };

  return (
    <section id="why-choose-us" className="py-24 bg-white">
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-red tracking-wider uppercase mb-3">
            {data?.tagline || "Wisa Guard Advantage"}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            {data?.title || "Why Choose Wisa Guard?"}
          </h3>
          <p className="text-brand-gray text-lg">
            {data?.description ||
              "At Wisa Guard, we understand that security is not just about protection; it's about trust, reliability, and peace of mind. Here's why discerning clients across Kenya choose us as their preferred security partner."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayFeatures()}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
