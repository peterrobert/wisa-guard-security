import React from "react";

const AboutLocation = () => {
  return (
    <section
      id="about-locations"
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
            cx="720"
            cy="300"
            r="400"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <circle
            cx="720"
            cy="300"
            r="600"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      <div className="max-w-360 mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* <!-- About Preview --> */}
          <div>
            <h2 className="text-sm font-bold text-brand-red tracking-wider uppercase mb-3">
              About Wisa Guard
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Setting the Standard in Security Excellence
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              With years of experience in the security sector, Wisa Guard
              Security Services Limited has established itself as a premier
              provider of comprehensive security solutions. We believe in
              proactive protection, utilizing a combination of highly trained
              personnel and cutting-edge technology to ensure the safety of our
              clients.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="border-l-2 border-brand-red pl-4">
                <div className="text-3xl font-bold mb-1">10+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="border-l-2 border-brand-red pl-4">
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-sm text-gray-400">Trained Guards</div>
              </div>
            </div>

            <button className="px-8 py-4 bg-white text-brand-navy font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2">
              Learn More About Us <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          {/* <!-- Locations --> */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-4xl p-8 md:p-10">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold">Coverage Areas</h3>
              <div className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center text-brand-red">
                <i className="fa-solid fa-location-dot"></i>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer border border-white/5">
                <div className="flex items-center gap-4">
                  <i className="fa-solid fa-building text-brand-red"></i>
                  <span className="font-medium">Nairobi (HQ)</span>
                </div>
                <i className="fa-solid fa-chevron-right text-sm text-gray-400"></i>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer border border-white/5">
                <div className="flex items-center gap-4">
                  <i className="fa-solid fa-map-pin text-brand-red"></i>
                  <span className="font-medium">Karen</span>
                </div>
                <i className="fa-solid fa-chevron-right text-sm text-gray-400"></i>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer border border-white/5">
                <div className="flex items-center gap-4">
                  <i className="fa-solid fa-map-pin text-brand-red"></i>
                  <span className="font-medium">Katani</span>
                </div>
                <i className="fa-solid fa-chevron-right text-sm text-gray-400"></i>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer border border-white/5">
                <div className="flex items-center gap-4">
                  <i className="fa-solid fa-map-pin text-brand-red"></i>
                  <span className="font-medium">Bungoma</span>
                </div>
                <i className="fa-solid fa-chevron-right text-sm text-gray-400"></i>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer border border-white/5">
                <div className="flex items-center gap-4">
                  <i className="fa-solid fa-map-pin text-brand-red"></i>
                  <span className="font-medium">Lower Kabete</span>
                </div>
                <i className="fa-solid fa-chevron-right text-sm text-gray-400"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLocation;
