import React, { useState } from "react";
import { motion } from "framer-motion";

const WhyChooseUs = ({ items, imageUrl, title, subtitle }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="w-full py-16 bg-gradient-to-br from-[#fef3f3]/90 to-[#fff] relative overflow-hidden">
      {/* Animated Background Squares */}
      <div className="absolute left-10 top-10 w-40 h-40 grid grid-cols-4 gap-2 opacity-20 z-0 animate-pulse-slow">
        {Array.from({ length: 160 }).map((_, i) => (
          <div key={i} className="w-3 h-3 border border-gray-800 border-dotted"></div>
        ))}
      </div>

      {/* Floating Leaf Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const leafChar = String.fromCodePoint(0x1f343);
          const xMovement = Math.random() * 100;
          const yMovement = Math.random() * 100;

          return (
            <motion.div
              key={i}
              initial={{
                x: `${xMovement}%`,
                y: `${yMovement}%`,
                opacity: 0,
                rotate: 0,
              }}
              animate={{
                x: `${xMovement + (Math.random() * 50 - 25)}%`,
                y: `${yMovement + (Math.random() * 30 - 15)}%`,
                opacity: [0, 0.6, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "loop",
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
              className="absolute text-green-400 text-xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              {leafChar}
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-6 md:px-10 lg:px-20 items-center relative z-10">
        {/* Image Side */}
        <motion.div
          className="relative w-full flex justify-center items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative flex flex-col sm:flex-row items-center gap-4">
            <img
              src={imageUrl || "https://cryptosec.com/wp-content/uploads/2022/10/Left-About-Us.png.webp"}
              alt="About CryptoSec"
              className="w-full sm:w-80 sm:h-96 md:w-[500px] md:h-[500px] object-cover"
            />
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm sm:text-md tracking-widest text-[rgb(22, 78, 99)] font-semibold uppercase mb-2 pt-6 text-center lg:text-left">
            {subtitle || "Protecting the Decentralized Future"}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-green-500 text-center lg:text-left">
            {title || "Why Choose Cryptosec?"}
          </h2>

          <div className="space-y-4 pb-10">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white via-[#b2f0e9]/70 to-white border border-gray-200 shadow-sm rounded-lg p-4 cursor-pointer transition-transform hover:scale-[1.01]"
                onClick={() => toggleIndex(index)}
              >
                <div className="flex justify-between items-center text-base sm:text-lg font-semibold text-gray-800">
                  <span>{item.title}</span>
                  <span className="text-lg sm:text-xl font-bold text-green-500">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: activeIndex === index ? "auto" : 0,
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden text-sm text-gray-900 mt-2"
                >
                  {activeIndex === index && (
                    <p>{item.content}</p>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
      
        </motion.div>
      
      </div>
    </section>
  );
};

export default WhyChooseUs;
