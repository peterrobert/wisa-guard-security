"use client";
import { motion } from "framer-motion";
import React from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  return (
    <section
      id="contact-hero"
      className="relative min-h-125 w-full flex items-center bg-brand-navy overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-brand-navy to-[#111726] z-10"></div>
        <div className="absolute inset-0 grid-bg opacity-20 z-10 pointer-events-none"></div>
      </div>

      <div className="max-w-360 mx-auto px-6 lg:px-12 relative z-20 w-full py-20 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/20 text-brand-red text-sm font-bold mb-6 border border-brand-red/30"
        >
          <i className="fa-solid fa-headset"></i> 24/7 Support Available
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
        >
          Get in Touch
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Whether you need immediate emergency response, a comprehensive
          security consultation, or have general inquiries, our team is ready to
          assist you.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
