// import { motion } from "framer-motion";
// import about from "../assets/about.png";
// export default function CryptoHologramCTA() {
//   return (
//     <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
//       {/* Animated Background Squares */}
//       <div className="absolute left-10 top-10 w-40 h-40 grid grid-cols-4 gap-2 opacity-20 z-0 animate-pulse-slow">
//         {Array.from({ length: 360 }).map((_, i) => (
//           <div
//             key={i}
//             className="w-3 h-3 border border-gray-800 border-dotted"
//           ></div>
//         ))}
//       </div>
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
//         style={{
//           backgroundImage: `url(${about})`,
//           filter: "brightness(0.5) blur(1px) saturate(120%)",
//         }}
//       ></div>

//       {/* Hologram Layer (faint grid glow effect) */}
//       <div className="absolute inset-0 z-0 bg-gradient-to-br from-transparent via-white/10 to-transparent mix-blend-overlay" />

//       {/* CTA Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative z-10 text-center text-[rgb(22, 78, 99)] px-6  text-xl "
//       >
//         <div className="w-12 h-1 bg-red-500 mx-auto mb-4" />
//         <h2 className="text-lg md:text-6xl font-bold leading-tight mb-6">
//           Let us help you realize and protect the <br /> benefits of the new
//           economy
//         </h2>
//         <a
//           href="/contact"
//           className="mt-6 inline-block px-8 py-4 border border-green-400 rounded-md text-gray-800 bg-[rgb(16,253,228)] hover:text-black transition duration-300"
//         >
//           Contact Us
//         </a>
//       </motion.div>
//     </section>
//   );
// }


import { motion } from "framer-motion";

const CryptoHologramCTA = ({
  backgroundImage, 
  heading, 
  subheading, 
  ctaLink, 
  ctaText
}) => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Squares */}
      <div className="absolute left-10 top-10 w-40 h-40 grid grid-cols-4 gap-2 opacity-20 z-0 animate-pulse-slow">
        {Array.from({ length: 360 }).map((_, i) => (
          <div key={i} className="w-3 h-3 border border-gray-800 border-dotted"></div>
        ))}
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "brightness(0.5) blur(1px) saturate(120%)",
        }}
      ></div>

      {/* Hologram Layer (faint grid glow effect) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-transparent via-white/10 to-transparent mix-blend-overlay" />

      {/* CTA Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-[rgb(22, 78, 99)] px-6 text-xl"
      >
        <div className="w-12 h-1 bg-red-500 mx-auto mb-4" />
        <h2 className="text-lg md:text-6xl font-bold leading-tight mb-6">
          {heading}
        </h2>
        <p className="text-lg md:text-2xl mb-6">
          {subheading}
        </p>
        <a
          href={ctaLink}
          className="mt-6 inline-block px-8 py-4 border border-green-400 rounded-md text-gray-800 bg-[rgb(16,253,228)] hover:text-black transition duration-300"
        >
          {ctaText}
        </a>
      </motion.div>
    </section>
  );
};

export default CryptoHologramCTA;
