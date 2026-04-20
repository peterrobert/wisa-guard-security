"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const HeroSection = () => {
  return (
    <motion.section
      id="services-hero"
      className="relative h-100 w-full flex items-center justify-center overflow-hidden bg-brand-navy"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/heroImage.jpeg"
          alt="security guards patrolling"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* SVG */}
      <motion.div
        className="absolute inset-0 z-10 opacity-20 pointer-events-none flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      >
        <svg viewBox="0 0 1440 400" className="w-full h-full">
          <path
            d="M0 200C300 200 400 100 720 100C1040 100 1140 200 1440 200"
            stroke="white"
            strokeWidth={1}
            strokeDasharray="4 4"
          />
        </svg>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={container}
        className="relative z-20 max-w-6xl mx-auto px-6 text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
        >
          Comprehensive <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-red to-red-400">
            Security Solutions
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
        >
          Tailored protection strategies designed to mitigate risks and
          safeguard your assets, personnel, and peace of mind.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-brand-red text-white font-semibold rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-brand-red/20 inline-flex items-center gap-2"
          >
            Get a Free Consultation
            <i className="fa-solid fa-arrow-right text-sm" />
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
