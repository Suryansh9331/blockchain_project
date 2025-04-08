// import { motion } from "framer-motion";
// import { useEffect } from "react";
// import "../styles/balloons.css";

// export default function CryptoServices({
//   headingSection,
//   serviceSection,
//   imageTextSection,
//   imageTextStaticSection,
//   ctaText,
//   ctaLink,
// }) {
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   return (
//     <section className="relative w-full bg-gradient-to-br from-white via-[#b2f0e9] to-white animate-gradient-move text-cyan-900 py-16 px-4 md:px-12 overflow-hidden">
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <div className="balloon balloon-1" />
//         <div className="balloon balloon-2" />
//         <div className="balloon balloon-3" />
//         <div className="balloon balloon-4" />
//       </div>

//       <div className="flex justify-center items-center min-screen">
//         <div className="w-[2px] h-[150px] bg-red-500 animate-pulse-glow"></div>
//       </div>

//       <div className="max-w-7xl mx-auto space-y-20 relative z-10">
//         {/* Heading Section */}
//         <motion.div
//           initial={{ y: -50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: false, amount: 0.3 }}
//           className="space-y-6"
//         >
//           <h2 className="text-red-600 text-sm tracking-widest font-medium uppercase">{headingSection?.subheadline}</h2>
//           <h1 className="text-3xl md:text-5xl font-bold">{headingSection?.headline}</h1>
//           <p className="text-gray-700 leading-relaxed text-lg">{headingSection?.description}</p>
//         </motion.div>

//         {/* Services Section */}
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: false, amount: 0.3 }}
//           className="grid md:grid-cols-3 gap-10"
//         >
//           <div className="bg-[#164e63] text-white shadow-[0_0_80px_rgba(0,0,0,0.8)] p-6 space-y-3 hover:scale-105 transition-transform">
//             <h3 className="text-xl font-semibold text-red-600 mb-4">{serviceSection?.title || "All Our Services"}</h3>
//             <ul className="space-y-2">
//               {serviceSection?.services?.map((service, idx) => (
//                 <li
//                   key={idx}
//                   className={
//                     service.highlight
//                       ? "text-red-500 font-semibold"
//                       : "hover:text-[rgb(111,207,151)] cursor-pointer"
//                   }
//                 >
//                   {service.label}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="md:col-span-2 space-y-6">
//             {serviceSection?.description?.slice(0, -2).map((para, idx) => (
//               <p key={idx} className="text-gray-700 text-lg">{para}</p>
//             ))}
//             <div className="bg-gray-100 p-6 border-l-4 border-red-600 shadow-[0_0_80px_rgba(0,0,0,0.4)]">
//               {serviceSection?.description?.slice(-2).map((para, idx) => (
//                 <p key={idx} className={`text-gray-900 text-base ${idx !== 0 ? "mt-4" : ""}`}>{para}</p>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* Image + Text Section */}
//         <motion.div
//           initial={{ y: 60, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.9 }}
//           viewport={{ once: false, amount: 0.3 }}
//           className="grid md:grid-cols-2 gap-10 items-start"
//         >
//           <div className="space-y-6 order-1 md:order-1">
//             {imageTextSection?.text?.map((t, i) => (
//               <p key={i} className="text-gray-700 text-lg">{t}</p>
//             ))}
//           </div>
//           <img
//             src={imageTextSection?.imageSrc}
//             alt="Section Visual"
//             className="shadow-[0_0_100px_rgba(0,0,0,0.85)] w-[110%] object-cover hover:scale-105 transition-transform duration-500 order-2 md:order-2"
//           />
//         </motion.div>

//         {/* Static Image & Text Section */}
//         <motion.div
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.9 }}
//           viewport={{ once: false, amount: 0.3 }}
//           className="grid md:grid-cols-2 gap-10 items-start"
//         >
//           <img
//             src={imageTextStaticSection?.imageSrc}
//             alt="Section Visual"
//             className="shadow-[0_0_100px_rgba(0,0,0,0.85)] w-[110%] object-cover hover:scale-105 transition-transform duration-500"
//           />
//           <div className="bg-gray-100 p-6 border-l-4 border-red-600 shadow-[0_0_80px_rgba(0,0,0,0.4)]">
//             {imageTextStaticSection?.text?.map((t, i) => (
//               <p key={i} className={`text-base ${i !== 0 ? "mt-4" : ""}`}>{t}</p>
//             ))}
//           </div>
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ y: 70, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: false, amount: 0.3 }}
//           className="text-center space-y-4"
//         >
//           <div className="flex justify-center items-center min-screen">
//             <div className="w-[2px] h-[150px] bg-green-500 animate-pulse-glow shadow-lg"></div>
//           </div>
//           <h2 className="text-2xl font-bold text-[rgb(71,226,100)]">{ctaText?.title}</h2>
//           <p className="text-gray-800 text-lg max-w-2xl mx-auto">{ctaText?.subtitle}</p>
//           <a href={ctaLink || "/contact"} className="py-6 inline-block">
//             <button className="px-6 py-3 rounded-full bg-[#164e63] hover:bg-green-500 transition-colors duration-300 text-white font-semibold">
//               {ctaText?.button || "Contact Us"}
//             </button>
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }





import { motion } from "framer-motion";
import { useEffect } from "react";
import "../styles/balloons.css";

export default function CryptoServices({
  headingSection,
  serviceSection,
  imageTextSection,
  imageTextStaticSection,
  ctaText,
  ctaLink,
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-br from-white via-[#b2f0e9] to-white animate-gradient-move text-cyan-900 py-16 px-4 md:px-12 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="balloon balloon-1" />
        <div className="balloon balloon-2" />
        <div className="balloon balloon-3" />
        <div className="balloon balloon-4" />
      </div>

      <div className="flex justify-center items-center min-screen">
        <div className="w-[2px] h-[150px] bg-red-500 animate-pulse-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Heading Section */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-red-600 text-sm tracking-widest font-medium uppercase">
            {headingSection?.subheadline}
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold">{headingSection?.headline}</h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            {headingSection?.description}
          </p>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-10"
        >
          <div className="bg-[#164e63] text-white shadow-[0_0_80px_rgba(0,0,0,0.8)] p-6 space-y-3 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              {serviceSection?.title || "All Our Services"}
            </h3>
            <ul className="space-y-2">
              {serviceSection?.services?.map((service, idx) => (
                <li
                  key={idx}
                  className={
                    service.highlight
                      ? "text-red-500 font-semibold"
                      : "hover:text-[rgb(111,207,151)] cursor-pointer"
                  }
                >
                  <a href={service.link || "#"} className="block w-full">
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-6">
            {serviceSection?.description?.slice(0, -2).map((para, idx) => (
              <p key={idx} className="text-gray-700 text-lg">{para}</p>
            ))}
            <div className="bg-gray-100 p-6 border-l-4 border-red-600 shadow-[0_0_80px_rgba(0,0,0,0.4)]">
              {serviceSection?.description?.slice(-2).map((para, idx) => (
                <p key={idx} className={`text-gray-900 text-base ${idx !== 0 ? "mt-4" : ""}`}>{para}</p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Image + Text Section */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-10 items-start"
        >
          <div className="space-y-6 order-1 md:order-1">
            {imageTextSection?.text?.map((t, i) => (
              <p key={i} className="text-gray-700 text-lg">{t}</p>
            ))}
          </div>
          <img
            src={imageTextSection?.imageSrc}
            alt="Section Visual"
            className="shadow-[0_0_100px_rgba(0,0,0,0.85)] w-[110%] object-cover hover:scale-105 transition-transform duration-500 order-2 md:order-2"
          />
        </motion.div>

        {/* Static Image & Text Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-10 items-start"
        >
          <img
            src={imageTextStaticSection?.imageSrc}
            alt="Section Visual"
            className="shadow-[0_0_100px_rgba(0,0,0,0.85)] w-[110%] object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="bg-gray-100 p-6 border-l-4 border-red-600 shadow-[0_0_80px_rgba(0,0,0,0.4)]">
            {imageTextStaticSection?.text?.map((t, i) => (
              <p key={i} className={`text-base ${i !== 0 ? "mt-4" : ""}`}>{t}</p>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center space-y-4"
        >
          <div className="flex justify-center items-center min-screen">
            <div className="w-[2px] h-[150px] bg-green-500 animate-pulse-glow shadow-lg"></div>
          </div>
          <h2 className="text-2xl font-bold text-[rgb(71,226,100)]">{ctaText?.title}</h2>
          <p className="text-gray-800 text-lg max-w-2xl mx-auto">{ctaText?.subtitle}</p>
          <a href={ctaLink || "/contact"} className="py-6 inline-block">
            <button className="px-6 py-3 rounded-full bg-[#164e63] hover:bg-green-500 transition-colors duration-300 text-white font-semibold">
              {ctaText?.button || "Contact Us"}
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
