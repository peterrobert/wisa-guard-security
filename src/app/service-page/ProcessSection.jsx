import Image from "next/image";
const ProcessSection = () => {
  return (
    <section
      id="service-process"
      className="py-24 bg-white border-t border-gray-100"
    >
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-brand-red tracking-wider uppercase mb-3">
              Our Approach
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              How We Secure Your World
            </h3>
            <p className="text-brand-gray text-lg mb-8 leading-relaxed">
              We dont believe in one-size-fits-all security. Our methodology
              ensures that every solution is tailored to your specific risk
              profile and operational requirements.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-navy mb-2">
                    Comprehensive Risk Assessment
                  </h4>
                  <p className="text-brand-gray text-sm">
                    We conduct thorough site surveys and vulnerability analyses
                    to identify potential threats before they materialize.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-navy mb-2">
                    Tailored Strategy Development
                  </h4>
                  <p className="text-brand-gray text-sm">
                    Based on our findings, we design a customized security
                    blueprint integrating manpower, technology, and procedures.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center font-bold shrink-0 mt-1 shadow-lg shadow-brand-red/20">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-navy mb-2">
                    Flawless Execution & Monitoring
                  </h4>
                  <p className="text-brand-gray text-sm">
                    Deployment of trained personnel and systems, backed by our
                    24/7 control center for continuous oversight and rapid
                    response.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-soft bg-gray-100 border border-gray-100">
              <Image
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/b24d99b19d-5fab1509371be400dd42.png"
                alt="security control room with multiple monitors showing cctv footage, operators working, professional modern setup"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-[20px] shadow-hover border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                  <i className="fa-solid fa-headset text-xl"></i>
                </div>
                <div>
                  <div className="text-lg font-bold text-brand-navy">
                    24/7 Control Center
                  </div>
                  <div className="text-sm text-brand-gray">
                    Always monitoring
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
