import { motion } from "framer-motion";
import OrbitAnimation from "./animations/orbitanim"; // Elliptical animation

const ExpertiseSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-white/80 via-[#b2f0e9]/80 to-white to-transparent backdrop-blur-md overflow-hidden py-24 px-6 sm:px-10">
      {/* Dotted grid background on right side */}
      <div className="absolute right-0 top-0 h-full w-1/3 z-0 pointer-events-none opacity-50">
        <div className="w-full h-full bg-[length:12px_12px] bg-[radial-gradient(#00000033_1px,transparent_0)] bg-repeat" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="https://cryptosec.com/wp-content/uploads/2022/08/CryptoSec-Intersection-1024x1003-1.png.webp" // Replace with your actual image
            alt="Expertise Graphic"
            className="max-w-xs md:max-w-sm"
          />
        </motion.div>

        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Text */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                • Specialist Expertise
              </h3>
              <p className="text-gray-700 mb-3 text-[18px] leading-relaxed">
                Our world-class expertise includes:
              </p>
              <ul className="list-disc ml-5 text-gray-800 text-md leading-relaxed">
                <li>Cybersecurity & Privacy</li>
                <li>Financial Crime Risk Monitoring</li>
                <li>Regulatory Compliance</li>
                <li>Blockchain, Smart Contracts & Web3</li>
              </ul>
              <div className="mt-4 h-1 w-24 bg-red-600" />
            </div>

            {/* Right Text */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                • Where Trust Is at a Premium
              </h3>
              <p className="text-gray-700 text-md leading-relaxed">
                We provide secure architecture, compliance assessments, and
                crypto investigations to help enterprises build confidence with
                regulators, stakeholders, and global markets.
              </p>
              <div className="mt-4 h-1 w-20 bg-red-600" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
