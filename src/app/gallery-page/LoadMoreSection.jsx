import React from "react";

const LoadMoreSection = () => {
  return (
    <div className="mt-16 text-center">
      <button className="px-8 py-3 rounded-full border-2 border-brand-navy text-brand-navy font-bold hover:bg-brand-navy hover:text-white transition-colors duration-300">
        Load More Images <i className="fa-solid fa-arrow-down ml-2"></i>
      </button>
    </div>
  );
};

export default LoadMoreSection;
