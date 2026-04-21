import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="service-detail-hero"
      className="relative min-h-150 w-full flex items-center bg-brand-light overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none"></div>

      <div className="max-w-360 mx-auto px-6 lg:px-12 relative z-20 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* <!-- Left Content --> */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 text-brand-red text-sm font-bold mb-6">
              <i className="fa-solid fa-user-shield"></i> Premium Service
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6 tracking-tight leading-[1.1]">
              Professional <br />
              Guarding Services
            </h1>

            <p className="text-lg text-brand-gray mb-10 leading-relaxed">
              Highly trained, vetted, and professional security personnel for
              residential, commercial, and industrial properties. We provide a
              visible deterrent and rapid response to any security threat.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="px-8 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-brand-red/20 w-full sm:w-auto inline-flex items-center justify-center gap-2">
                Request This Service <i className="fa-solid fa-arrow-right"></i>
              </button>
              <button className="px-8 py-4 bg-white text-brand-navy font-bold rounded-full hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm w-full sm:w-auto">
                Download Brochure
              </button>
            </div>
          </div>

          {/* <!-- Right Illustration/Image --> */}
          <div className="relative hidden lg:block h-125 rounded-3xl overflow-hidden shadow-hover border border-gray-100 bg-white p-8">
            <div className="absolute inset-0 bg-subtle-gradient"></div>
            <Image
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/4df6dc4c2f-74e669eab864318461fa.png"
              alt="professional security guard standing confidently in front of a modern corporate building, clean vector illustration style, blue and red accents"
              fill
              className="object-contain relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
