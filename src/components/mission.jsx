import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

const MissionSection = () => {
  const bubbleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const bubbles = bubbleRef.current?.querySelectorAll(".bubble");
      bubbles?.forEach((bubble, i) => {
        const movement = (e.clientX + e.clientY) * (0.001 + i * 0.0001);
        bubble.style.transform = `translateY(-${movement}px) translateX(${movement}px)`;
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-white/80 via-[#b2f0e9]/80 backdrop-blur-md text-left py-20 px-6 sm:px-8 lg:px-32 pt-36 overflow-hidden">
      {/* Bubble Animation Background */}
      <div ref={bubbleRef} className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="bubble absolute bg-cyan-100 opacity-25 rounded-full mix-blend-overlay"
            style={{
              width: `${60 + Math.random() * 80}px`,
              height: `${60 + Math.random() * 80}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      <div className="flex justify-center items-center min-screen pb-8">
        <div className="w-[3px] h-[150px] bg-green-500 animate-pulse-glow shadow-lg"></div>
      </div>
      {/* Content Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        {/* Empowering text */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-green-600 italic mb-3 pl-1"
        >
          Empowering the Decentralized Future
        </motion.p>
        
        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-cyan-900 mb-6 pr-4"
        >
          SETTING THE STANDARDS IN ENTERPRISE-READY CRYPTO, DIGITAL ASSETS, BLOCKCHAIN, WEB3, CBDC SECURITY, COMPLIANCE AND INVESTIGATIONS
        </motion.h2>

        {/* Description paragraph */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-gray-800 text-lg sm:text-xl mb-8 pr-4"
        >
          Our mission is to facilitate the safe, secure, and compliant institutional adoption of blockchain, crypto, DeFi, Web3, and other decentralization technologies. We combine traditional finance knowledge with modern tech expertise to offer robust crypto security, risk management, and investigation services.
        </motion.p>

        {/* Contact button */}
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-xl border border-[rgb(111,207,151)] bg-[rgb(17,253,228)] text-cyan-800 hover:text-black font-semibold py-3 px-7 rounded-md text-base sm:text-lg transition-all duration-300 shadow-md"
        >
          Contact us →
        </motion.a>
      </motion.div>
    </section>
  );
};

export default MissionSection;
