import React from "react";
import Image from "next/image";
import LoadMoreSection from "./LoadMoreSection";

const GallerySection = () => {
  return (
    <section id="gallery-main" className="py-24 bg-white relative z-30">
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Item 1 --> */}
          <div
            className="gallery-item group relative rounded-3xl overflow-hidden shadow-hover border border-gray-100 cursor-pointer h-87.5"
            onClick={console.log("Clicked")}
          >
            <Image
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/33cdb56a74-73006de3775deb74ea57.png"
              alt="Professional security guard standing watch at a corporate building entrance, sharp focus, high quality"
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500"
            />
            <div className="gallery-item-overlay absolute inset-0 bg-brand-navy/80 flex flex-col justify-center items-center p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <i className="fa-solid fa-magnifying-glass-plus"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                Corporate Guarding
              </h3>
              <p className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                Guarding Services
              </p>
            </div>
          </div>

          {/* <!-- Item 2 --> */}
          <div
            className="gallery-item group relative rounded-3xl overflow-hidden shadow-hover border border-gray-100 cursor-pointer h-87.5"
            onClick={console.log("Clicked")}
          >
            <Image
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/33cdb56a74-73006de3775deb74ea57.png"
              alt="Professional security guard standing watch at a corporate building entrance, sharp focus, high quality"
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500"
            />
            <div className="gallery-item-overlay absolute inset-0 bg-brand-navy/80 flex flex-col justify-center items-center p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <i className="fa-solid fa-magnifying-glass-plus"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                Festival Crowd Control
              </h3>
              <p className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                Event Security
              </p>
            </div>
          </div>

          {/* <!-- Item 3 --> */}
          <div
            className="gallery-item group relative rounded-3xl overflow-hidden shadow-hover border border-gray-100 cursor-pointer h-87.5"
            onClick={console.log("Clicked")}
          >
            <Image
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/33cdb56a74-73006de3775deb74ea57.png"
              alt="Professional security guard standing watch at a corporate building entrance, sharp focus, high quality"
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500"
            />
            <div className="gallery-item-overlay absolute inset-0 bg-brand-navy/80 flex flex-col justify-center items-center p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <i className="fa-solid fa-magnifying-glass-plus"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                K9 Perimeter Patrol
              </h3>
              <p className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                Canine Unit
              </p>
            </div>
          </div>

          {/* <!-- Item 4 --> */}
          <div
            className="gallery-item group relative rounded-3xl overflow-hidden shadow-hover border border-gray-100 cursor-pointer h-87.5"
            onClick={console.log("Clicked")}
          >
            <Image
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/33cdb56a74-73006de3775deb74ea57.png"
              alt="Professional security guard standing watch at a corporate building entrance, sharp focus, high quality"
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500"
            />
            <div className="gallery-item-overlay absolute inset-0 bg-brand-navy/80 flex flex-col justify-center items-center p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <i className="fa-solid fa-magnifying-glass-plus"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                Mobile Response Unit
              </h3>
              <p className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                Patrol & Response
              </p>
            </div>
          </div>

          {/* <!-- Item 5 --> */}
          <div
            className="gallery-item group relative rounded-3xl overflow-hidden shadow-hover border border-gray-100 cursor-pointer h-87.5"
            onClick={console.log("Clicked")}
          >
            <Image
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/33cdb56a74-73006de3775deb74ea57.png"
              alt="Professional security guard standing watch at a corporate building entrance, sharp focus, high quality"
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500"
            />
            <div className="gallery-item-overlay absolute inset-0 bg-brand-navy/80 flex flex-col justify-center items-center p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <i className="fa-solid fa-magnifying-glass-plus"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                24/7 Command Center
              </h3>
              <p className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                Equipment & Surveillance
              </p>
            </div>
          </div>

          {/* <!-- Item 6 --> */}
          <div
            className="gallery-item group relative rounded-3xl overflow-hidden shadow-hover border border-gray-100 cursor-pointer h-87.5"
            onClick={console.log("Clicked")}
          >
            <Image
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/33cdb56a74-73006de3775deb74ea57.png"
              alt="Professional security guard standing watch at a corporate building entrance, sharp focus, high quality"
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500"
            />
            <div className="gallery-item-overlay absolute inset-0 bg-brand-navy/80 flex flex-col justify-center items-center p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <i className="fa-solid fa-magnifying-glass-plus"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                Executive Protection
              </h3>
              <p className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                Guarding Services
              </p>
            </div>
          </div>
        </div>
      </div>
      <LoadMoreSection />
    </section>
  );
};

export default GallerySection;
