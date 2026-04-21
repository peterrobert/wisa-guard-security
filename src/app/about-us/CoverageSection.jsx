import React from "react";

const CoverageSection = ({ data }) => {
  const displayLocations = () => {
    if (!data?.coverage?.locations || !Array.isArray(data.coverage.locations))
      return null;
    return data.coverage.locations.map((location, index) => (
      <div
        className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5"
        key={index}
      >
        <div className="flex items-center gap-4">
          <i className={`fa-solid ${location.icon} text-brand-red`}></i>
          <span className="font-medium text-white">{location.label}</span>
        </div>
      </div>
    ));
  };
  return (
    <section
      id="compliance-coverage"
      className="py-24 bg-brand-navy text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="200"
            cy="300"
            r="400"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <circle
            cx="1200"
            cy="300"
            r="600"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      <div className="max-w-360 mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* <!-- Compliance --> */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-4xl p-10">
            <div className="w-16 h-16 rounded-2xl bg-brand-red/20 flex items-center justify-center text-brand-red mb-8">
              <i className={`fa-solid ${data?.compliance?.icon} text-3xl`}></i>
            </div>
            <h3 className="text-3xl font-bold mb-4">
              {data?.compliance?.title ||
                "Strict Compliance with Regulatory Standards"}
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {data?.compliance?.description ||
                "We are fully registered and compliant with the Kenya Private Security Regulatory Authority (KPSRA), ensuring that all our operations meet the highest legal and ethical standards in the industry."}
            </p>
            <div className="flex items-center gap-4 p-6 rounded-xl bg-white/5 border border-white/10">
              <i
                className={`fa-solid ${data?.compliance?.badge?.icon} text-2xl text-brand-red`}
              ></i>
              <div>
                <h4 className="font-bold text-white">
                  {data?.compliance?.badge?.title || "KPSRA License #12345"}
                </h4>
                <p className="text-sm text-gray-400">
                  {data?.compliance?.badge?.subtitle || "Valid License"}
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Coverage --> */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-4xl p-10">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold">
                {data?.coverage?.title || "Coverage Across Key Regions"}
              </h3>
              <div className="w-12 h-12 rounded-full bg-brand-red/20 flex items-center justify-center text-brand-red">
                <i
                  className={`fa-solid ${data?.coverage?.icon || "fa-map-pin"} text-xl`}
                ></i>
              </div>
            </div>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {data?.coverage?.description ||
                "Our extensive coverage spans across Nairobi, Karen, Katani, Lower Kabete, Bungoma, and regional branches, ensuring that we can provide rapid response and localized security solutions wherever our clients need us."}
            </p>

            <div className="space-y-4">{displayLocations()}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
