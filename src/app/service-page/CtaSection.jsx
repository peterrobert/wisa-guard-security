import Image from "next/image";
const CtaSection = () => {
  return (
    <section
      id="services-cta"
      className="py-20 bg-brand-navy relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-brand-navy to-brand-navy/90 z-10"></div>
        <Image
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7c7cd544a5-6134dee562c89834f016.png"
          alt="abstract dark blue security network background with glowing nodes"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="max-w-250 mx-auto px-6 relative z-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Upgrade Your Security?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
          Contact our experts today for a free consultation and discover how
          Wisa Guard can provide the ultimate protection for your assets.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-brand-red/20 w-full sm:w-auto">
            Request a Quote
          </button>
          <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors border border-white/20 backdrop-blur-sm w-full sm:w-auto">
            Call +254 700 000 000
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
