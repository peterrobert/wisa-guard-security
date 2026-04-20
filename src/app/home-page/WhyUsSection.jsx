const WhyUsSection = ({ data }) => {
  const displayWhyUs = () => {
    if (!data?.features || data.features.length === 0) {
      return (
        <p className="text-brand-gray leading-relaxed">
          No features available at the moment.
        </p>
      );
    }

    return data.features.map((feature, index) => (
      <div
        key={index}
        className="bg-white p-8 rounded-3xl shadow-soft hover:shadow-hover transition-all duration-300 border border-gray-100 group"
      >
        <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors text-brand-navy">
          <i className={`fa-solid ${feature.icon} text-2xl`}></i>
        </div>
        <h4 className="text-xl font-bold text-brand-navy mb-3">
          {feature.title}
        </h4>
        <p className="text-brand-gray leading-relaxed">{feature.description}</p>
      </div>
    ));
  };

  return (
    <section
      id="features"
      className="py-24 bg-brand-light relative -mt-10 rounded-t-[40px] z-30"
    >
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-red tracking-wider uppercase mb-3">
            {data?.tagline || "Why Choose Wisa Guard?"}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            {data?.title || "Unmatched Security Solutions Tailored for You"}
          </h3>
          <p className="text-brand-gray text-lg">
            {data?.description ||
              "Discover why Wisa Guard stands out as Kenya's premier security provider. With our expert team, cutting-edge technology, and unwavering commitment to your safety, we deliver unparalleled protection for your home, business, and events. Experience the Wisa Guard difference today."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayWhyUs()}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
