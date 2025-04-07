// import { motion } from "framer-motion";

// const CryptoAlternatingSections = ({ sections }) => {
//   return (
//     <section className="py-16 bg-gradient-to-br from-white/80 via-[#b2f0e9]/60 to-white relative overflow-hidden">
//       {/* Animated Background Squares */}
    
//       <div className="flex justify-center items-center min-screen">
//         <div className="w-[3px] h-[150px] bg-green-500 animate-pulse-glow shadow-lg"></div>
//       </div>
  
//       <div className="absolute left-10 top-10 w-40 h-40 grid grid-cols-4 gap-2 opacity-20 z-0 animate-pulse-slow">
//         {Array.from({ length: 360 }).map((_, i) => (
//           <div key={i} className="w-3 h-3 border border-gray-800 border-dotted"></div>
//         ))}
//       </div>
       
//       <div className="max-w-6xl mx-auto px-4 space-y-20 relative z-10 pt-14 pb-10">
//         {sections.map((section, i) => (
//           <motion.div
//             key={i}
//             className={`flex flex-col md:flex-row items-center gap-10 pt-8 ${
//               i % 2 === 1 ? "md:flex-row-reverse" : ""
//             }`}
//             initial={{ opacity: 0, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false, amount: 0.3 }}
//             transition={{ duration: 0.8, delay: i * 0.2 }}
//           >
//             <motion.img
//               src={section.image || "https://cryptosec.com/wp-content/uploads/2022/10/Left-About-Us.png.webp"} // Default image if none is provided
//               alt={section.title}
//               className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow-lg transition-transform duration-500"
//               whileHover={{ scale: 1.05 }}
//             />
//             <motion.div
//               className="w-full md:w-1/2 space-y-4"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: false, amount: 0.3 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//             >
//               <h3 className="text-3xl font-bold text-green-500">{section.title}</h3>
//               <p className="text-gray-600 text-lg leading-relaxed">{section.description}</p>
//               <a
//                 href={section.link || "#"} // Default link if none is provided
//                 className="mt-6 inline-block px-6 py-2 border border-green-400 rounded-md text-gray-800 bg-[rgb(16,253,228)] hover:text-black transition duration-300"
//               >
//                 {section.ctaText || "Learn More"} 
//               </a>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CryptoAlternatingSections;



import { motion } from "framer-motion";

const CryptoAlternatingSections = ({ sections }) => {
  return (
    <section className="py-16 bg-gradient-to-br from-white/80 via-[#b2f0e9]/60 to-white relative overflow-hidden">
      {/* Animated Background Squares */}
      <div className="absolute left-10 top-10 w-40 h-40 grid grid-cols-4 gap-2 opacity-20 z-0 animate-pulse-slow">
        {Array.from({ length: 360 }).map((_, i) => (
          <div key={i} className="w-3 h-3 border border-gray-800 border-dotted"></div>
        ))}
      </div>
      
      <div className="flex justify-center items-center min-screen">
        <div className="w-[3px] h-[150px] bg-green-500 animate-pulse-glow shadow-lg"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 space-y-20 relative z-10 pt-14 pb-10">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-10 pt-8 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <motion.img
              src={section.image || "https://cryptosec.com/wp-content/uploads/2022/10/Left-About-Us.png.webp"} // Default image if none is provided
              alt={section.title}
              className="w-full md:w-1/2 h-[500px] sm:h-[400px] md:h-[600px] object-cover shadow-[10px_0px_20px_5px_rgba(0,0,0,0.4)] transition-transform duration-500"
              whileHover={{ scale: 1.05 }}
            />
            <motion.div
              className="w-full md:w-1/2 space-y-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-3xl font-bold text-green-500">{section.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{section.description}</p>
              <a
                href={section.link || "#"} // Default link if none is provided
                className="mt-6 inline-block px-6 py-2 border border-green-400 rounded-md text-gray-800 bg-[rgb(16,253,228)] hover:text-black transition duration-300"
              >
                {section.ctaText || "Learn More"}
              </a>
            </motion.div>
          </motion.div>
        ))}
        
      <div className="flex justify-center items-center min-screen">
        <div className="w-[3px] h-[150px] bg-green-500 animate-pulse-glow shadow-lg"></div>
      </div>

      </div>
    </section>
  );
};

export default CryptoAlternatingSections;
