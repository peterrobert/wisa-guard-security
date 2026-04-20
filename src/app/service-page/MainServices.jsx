import React from "react";

const MainServices = () => {
  return (
    <section id="services-grid" className="py-24 bg-brand-light relative">
      <div className="absolute inset-0 grid-bg pointer-events-none"></div>
      <div className="max-w-360 mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-red tracking-wider uppercase mb-3">
            Our Expertise
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Professional Security Services
          </h3>
          <p className="text-brand-gray text-lg">
            We offer a full spectrum of security services, leveraging highly
            trained personnel and advanced technology to deliver uncompromising
            protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* <!-- Service 1: Guarding Services --> */}
          <div className="bg-white p-8 rounded-3xl shadow-card border border-gray-100 hover:shadow-hover transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-light rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
            <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
              <i className="fa-solid fa-user-shield text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-brand-navy mb-3">
              Guarding Services
            </h4>
            <p className="text-brand-gray text-sm mb-6 grow leading-relaxed">
              Highly trained, vetted, and professional security personnel for
              residential, commercial, and industrial properties.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy group-hover:text-brand-red transition-colors mt-auto"
            >
              View Details <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>
          {/* 
                    <!-- Service 2: Tracking Services --> */}
          <div className="bg-white p-8 rounded-3xl shadow-card border border-gray-100 hover:shadow-hover transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-light rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
            <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
              <i className="fa-solid fa-location-crosshairs text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-brand-navy mb-3">
              Tracking Services
            </h4>
            <p className="text-brand-gray text-sm mb-6 grow leading-relaxed">
              Advanced GPS tracking solutions for fleet management, personal
              assets, and high-value cargo in transit.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy group-hover:text-brand-red transition-colors mt-auto"
            >
              View Details <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>

          {/* <!-- Service 3: Event Security --> */}
          <div className="bg-white p-8 rounded-3xl shadow-card border border-gray-100 hover:shadow-hover transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-light rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
            <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
              <i className="fa-solid fa-people-group text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-brand-navy mb-3">
              Event Security
            </h4>
            <p className="text-brand-gray text-sm mb-6 grow leading-relaxed">
              Comprehensive crowd control, access management, and VIP protection
              for corporate events, concerts, and private gatherings.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy group-hover:text-brand-red transition-colors mt-auto"
            >
              View Details <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>

          {/* <!-- Service 4: Canine Services --> */}
          <div className="bg-white p-8 rounded-3xl shadow-card border border-gray-100 hover:shadow-hover transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-light rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
            <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
              <i className="fa-solid fa-dog text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-brand-navy mb-3">
              Canine Services
            </h4>
            <p className="text-brand-gray text-sm mb-6 grow leading-relaxed">
              Expertly trained guard dogs and handler teams for enhanced
              perimeter security, explosive detection, and deterrence.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy group-hover:text-brand-red transition-colors mt-auto"
            >
              View Details <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>

          {/* <!-- Service 5: Private Investigations --> */}
          <div className="bg-white p-8 rounded-3xl shadow-card border border-gray-100 hover:shadow-hover transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-light rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
            <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
              <i className="fa-solid fa-magnifying-glass text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-brand-navy mb-3">
              Private Investigations
            </h4>
            <p className="text-brand-gray text-sm mb-6 grow leading-relaxed">
              Discreet and professional investigative services including
              background checks, corporate fraud, and surveillance.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy group-hover:text-brand-red transition-colors mt-auto"
            >
              View Details <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>

          {/* <!-- Service 6: Security Consulting --> */}
          <div className="bg-white p-8 rounded-3xl shadow-card border border-gray-100 hover:shadow-hover transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-light rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
            <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
              <i className="fa-solid fa-clipboard-check text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-brand-navy mb-3">
              Security Consulting
            </h4>
            <p className="text-brand-gray text-sm mb-6 grow leading-relaxed">
              Comprehensive risk assessments, security audits, and strategic
              planning to fortify your organizations defenses.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy group-hover:text-brand-red transition-colors mt-auto"
            >
              View Details <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>

          {/* <!-- Service 7: Escort Security --> */}
          <div className="bg-white p-8 rounded-3xl shadow-card border border-gray-100 hover:shadow-hover transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-light rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
            <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
              <i className="fa-solid fa-car-side text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-brand-navy mb-3">
              Escort Security
            </h4>
            <p className="text-brand-gray text-sm mb-6 grow leading-relaxed">
              Secure transportation and armed escort services for high-net-worth
              individuals, executives, and valuable goods.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy group-hover:text-brand-red transition-colors mt-auto"
            >
              View Details <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>

          {/* <!-- Service 8: Debt Collection --> */}
          <div className="bg-white p-8 rounded-3xl shadow-card border border-gray-100 hover:shadow-hover transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-light rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
            <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
              <i className="fa-solid fa-file-invoice-dollar text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-brand-navy mb-3">
              Debt Collection
            </h4>
            <p className="text-brand-gray text-sm mb-6 grow leading-relaxed">
              Professional, firm, and legally compliant debt recovery services
              to protect your business financial health.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy group-hover:text-brand-red transition-colors mt-auto"
            >
              View Details <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainServices;
