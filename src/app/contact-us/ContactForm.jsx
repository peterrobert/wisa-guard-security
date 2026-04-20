import React from "react";

const ContactForm = () => {
  return (
    <section
      id="contact-details"
      className="py-24 bg-white relative -mt-20 z-30"
    >
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-hover border border-gray-100 flex items-start gap-6 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0">
                <i className="fa-solid fa-location-dot text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">
                  Office Location
                </h3>
                <p className="text-brand-gray mb-1">Suraj Plaza, Ngara</p>
                <p className="text-brand-gray">Nairobi, Kenya</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-hover border border-gray-100 flex items-start gap-6 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0">
                <i className="fa-solid fa-phone-volume text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">
                  Phone Numbers
                </h3>
                <div className="space-y-2">
                  <a
                    href="tel:+254700000000"
                    className="block text-brand-gray hover:text-brand-red transition-colors"
                  >
                    +254 700 000 000 (Main)
                  </a>
                  <a
                    href="tel:+254700000001"
                    className="block text-brand-gray hover:text-brand-red transition-colors"
                  >
                    +254 700 000 001 (Support)
                  </a>
                  <a href="tel:911" className="block text-brand-red font-bold">
                    911 (Emergency)
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-hover border border-gray-100 flex items-start gap-6 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0">
                <i className="fa-solid fa-envelope-open-text text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">
                  Email Address
                </h3>
                <div className="space-y-2">
                  <a
                    href="mailto:info@wisaguard.co.ke"
                    className="block text-brand-gray hover:text-brand-red transition-colors"
                  >
                    info@wisaguard.co.ke
                  </a>
                  <a
                    href="mailto:support@wisaguard.co.ke"
                    className="block text-brand-gray hover:text-brand-red transition-colors"
                  >
                    support@wisaguard.co.ke
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-10 rounded-3xl shadow-hover border border-gray-100 relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light rounded-bl-[100px] -z-10"></div>

              <div className="mb-10">
                <h2 className="text-3xl font-bold text-brand-navy mb-3">
                  Send us a Message
                </h2>
                <p className="text-brand-gray">
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all bg-gray-50 focus:bg-white text-brand-navy"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all bg-gray-50 focus:bg-white text-brand-navy"
                      placeholder="+254..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all bg-gray-50 focus:bg-white text-brand-navy"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-2">
                    Service of Interest
                  </label>
                  <select className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all bg-gray-50 focus:bg-white text-brand-navy">
                    <option>General Inquiry</option>
                    <option>Guarding Services</option>
                    <option>CCTV Installation</option>
                    <option>Dog Services</option>
                    <option>Tracking Systems</option>
                    <option>Private Investigations</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-2">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all bg-gray-50 focus:bg-white resize-none text-brand-navy"
                    placeholder="How can we help you securely today?"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    className="w-full sm:w-auto px-10 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-brand-red/20 flex items-center justify-center gap-3 text-lg"
                  >
                    Send Message <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
