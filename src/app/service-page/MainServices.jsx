"use client";
import Link from "next/link";
import React from "react";

const MainServices = ({ data }) => {
  const displayServices = () => {
    if (!data?.services || data.services.length === 0) {
      return (
        <p className="text-center text-brand-gray">
          No services available at the moment. Please check back later.
        </p>
      );
    }

    return data?.services.map((service, index) => (
      <div
        key={index}
        className="bg-white p-8 rounded-3xl shadow-card border border-gray-100 hover:shadow-hover transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-light rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
        <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
          <i className={`fa-solid ${service.icon} text-2xl`}></i>
        </div>
        <h4 className="text-xl font-bold text-brand-navy mb-3">
          {service.title || "Service Title"}
        </h4>
        <p className="text-brand-gray text-sm mb-6 grow leading-relaxed">
          {service.description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        </p>
        <Link
          href={`/service-page/${service.slug.current}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy group-hover:text-brand-red transition-colors mt-auto"
        >
          View Details <i className="fa-solid fa-arrow-right text-xs"></i>
        </Link>
      </div>
    ));
  };

  return (
    <section id="services-grid" className="py-24 bg-brand-light relative">
      <div className="absolute inset-0 grid-bg pointer-events-none"></div>
      <div className="max-w-360 mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-red tracking-wider uppercase mb-3">
            {data?.tagline || "Our Services"}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            {data?.title || "Comprehensive Security Solutions for Every Need"}
          </h3>
          <p className="text-brand-gray text-lg">
            {data?.description ||
              "From guarding and tracking to event security and investigations, we offer a full spectrum of services tailored to protect what matters most to you."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayServices()}
        </div>
      </div>
    </section>
  );
};

export default MainServices;
