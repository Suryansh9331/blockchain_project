

import React from "react";
import { motion } from "framer-motion";

const AboutSection = ({
  image1,
  image2,
  title1,
  text1,
  title2,
  text2,
  title3,
  text3,
  title4,
  text4,
  title5,
  text5,
  title6,
  text6,
}) => {
  return (
    <div className="bg-gradient-to-br pt-8 pb-16 from-white via-[#b2f0e9] to-white text-[rgb(22,78,99)] py-10 px-6 md:px-16 lg:px-24">
      <div className="absolute left-10 top-10 w-40 h-40 grid grid-cols-4 gap-2 opacity-20 z-0 animate-pulse-slow">
        {Array.from({ length: 660 }).map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 border border-gray-800 border-dotted"
          ></div>
        ))}
      </div>

      {/* First section: Left image, Right text */}
      <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center pt-8">
        {/* Left side: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 shadow-xl p-2 z-0"></div>
          <img
            src={image1}
            alt="About CryptoSec"
            className="shadow-2xl transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl max-w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] object-cover mx-auto"
          />
        </motion.div>

        {/* Right side: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left relative z-10"
        >
          <div className="bg-[#b2f0e9] bg-opacity-30 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <h2 className="text-xl sm:text-5xl font-bold text-[rgb(22, 78, 99)] mb-6 leading-tight tracking-tight">
              {title1}
            </h2>
            <p className="text-lg text-gray-900 mb-8 leading-relaxed">
              {text1}
            </p>
            <h2 className="text-xl sm:text-5xl font-bold text-[rgb(22, 78, 99)] mb-6 leading-tight tracking-tight">
              {title2}
            </h2>
            <p className="text-lg text-gray-900 mb-8 leading-relaxed">
              {text2}
            </p>
            <h2 className="text-xl sm:text-5xl font-bold text-[rgb(22, 78, 99)] mb-6 leading-tight tracking-tight">
              {title3}
            </h2>
            <p className="text-lg text-gray-900 mb-8 leading-relaxed">
              {text3}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Second section: Right image, Left text */}
      <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center pt-8">
        {/* Right side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative lg:order-last"
        >
          <div className="absolute inset-0 shadow-xl p-2 z-0"></div>
          <img
            src={image2}
            alt="About CryptoSec"
            className="shadow-2xl transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl max-w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] object-cover mx-auto"
          />
        </motion.div>

        {/* Left side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left relative z-10"
        >
          <div className="bg-[#b2f0e9] bg-opacity-30 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <h2 className="text-xl sm:text-5xl font-bold text-[rgb(22, 78, 99)] mb-6 leading-tight tracking-tight">
              {title4}
            </h2>
            <p className="text-lg text-gray-900 mb-8 leading-relaxed">
              {text4}
            </p>

            <h2 className="text-xl sm:text-5xl font-bold text-[rgb(22, 78, 99)] mb-6 leading-tight tracking-tight">
              {title5}
            </h2>
            <p className="text-lg text-gray-900 mb-8 leading-relaxed">
              {text5}
            </p>
            <h2 className="text-xl sm:text-5xl font-bold text-[rgb(22, 78, 99)] mb-6 leading-tight tracking-tight">
              {title6}
            </h2>
            <p className="text-lg text-gray-900 mb-8 leading-relaxed">
              {text6}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center items-center min-screen">
        <div className="w-[3px] h-[150px] bg-green-500 animate-pulse-glow shadow-lg"></div>
      </div>

      <div className=" text-center px-2 py-16 sm:px-4">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight drop-shadow-xl">
          We sets the standards in Enterprise-Ready Crypto Security, Compliance,
          and Investigations in line with its mission to protect the future of
          finance and governance
        </h2>
      </div>

      <div className="flex justify-center items-center min-screen">
        <div className="w-[3px] h-[150px] bg-green-500 animate-pulse-glow shadow-lg"></div>
      </div>
    </div>
  );
};

export default AboutSection;
