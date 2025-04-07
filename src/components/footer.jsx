// import { motion } from "framer-motion";
// import { Mail, Linkedin, Twitter, Instagram } from "lucide-react";
// import React, { useEffect, useRef } from "react";

// export default function CryptoFooter() {
//   const bubbleRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const bubbles = bubbleRef.current?.querySelectorAll(".bubble");
//       bubbles?.forEach((bubble, i) => {
//         const movement = (e.clientX + e.clientY) * (0.001 + i * 0.0001);
//         bubble.style.transform = `translateY(-${movement}px) translateX(${movement}px)`;
//       });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <footer className="relative overflow-hidden bg-gradient-to-br from-white via-[#b2f0e9] to-white animate-gradient-move text-black py-16 px-4 sm:px-6 lg:px-10 font-sans">
//       {/* Background Effects */}
//       <div className="absolute right-0 top-0 bottom-10 w-1/5 opacity-20 z-0 animate-pulse bg-[radial-gradient(#111_1px,transparent_0.5px)] [background-size:16px_16px] pointer-events-none" />
//       <div
//         ref={bubbleRef}
//         className="absolute inset-0 overflow-hidden z-0 pointer-events-none"
//       >
//         {[...Array(10)].map((_, i) => (
//           <div
//             key={i}
//             className="bubble absolute bg-cyan-100 opacity-25 rounded-full mix-blend-overlay"
//             style={{
//               width: `${60 + Math.random() * 80}px`,
//               height: `${60 + Math.random() * 80}px`,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animation: `float ${
//                 8 + Math.random() * 10
//               }s ease-in-out infinite`,
//               animationDelay: `${Math.random() * 2}s`,
//             }}
//           ></div>
//         ))}
//       </div>

//       <motion.div
//         className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Logo */}
//         <div className="space-y-4 mx-auto sm:mx-0">
//           <img
//             src="/logo.svg"
//             alt="Blockchain Logo"
//             className="w-28 sm:w-32 mx-auto sm:mx-0"
//           />
//           <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-[rgb(22,78,99)]">
//             Blockchain
//           </h2>
//         </div>

//         {/* Menu */}
//         <div className="space-y-3 mx-auto sm:mx-0">
//           <h3 className="font-semibold text-lg md:text-xl text-gray-900 border-b border-black/10 pb-1">
//             Menu
//           </h3>
//           {["Home", "About", "Approach", "Services", "Insights", "Contact"].map(
//             (item, i) => (
//               <a
//                 key={i}
//                 href="#"
//                 className="group flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base text-gray-800 hover:text-green-700 transition duration-300"
//               >
//                 <span className="group-hover:translate-x-1 transition-transform">
//                   ➤
//                 </span>
//                 <span>{item}</span>
//               </a>
//             )
//           )}
//         </div>

//         {/* Legal */}
//         <div className="space-y-3 mx-auto sm:mx-0">
//           <h3 className="font-semibold text-lg md:text-xl text-gray-900 border-b border-black/10 pb-1">
//             Legal
//           </h3>
//           {[
//             "Privacy Policy",
//             "Cookie Policy",
//             "Terms and Conditions",
//             "Statement on Unsolicited Outreach by Recruitment Agencies",
//           ].map((item, i) => (
//             <a
//               key={i}
//               href="#"
//               className="block text-sm sm:text-base text-gray-700 hover:text-green-700 transition"
//             >
//               {item}
//             </a>
//           ))}
//         </div>

//         {/* Contact */}
//         <div className="space-y-4 mx-auto sm:mx-0">
//           <h3 className="font-semibold text-lg md:text-xl text-gray-900 border-b border-black/10 pb-1">
//             Contact Us
//           </h3>
//           <div className="text-sm text-gray-800 space-y-2">
//             <p>
//               <strong>Email:</strong>
//               <br />
//               <a
//                 href="mailto:info@blockchain.com"
//                 className="text-green-600 hover:underline"
//               >
//                 blockchain@.com
//               </a>
//             </p>
//             <p>
//               <strong>Telegram:</strong>
//               <br />
//               <a href="#" className="text-green-600 hover:underline">
//                 @Blochchainc
//               </a>
//             </p>
//             <p>
//               <strong>Send us a message:</strong>
//               <br />
//               <a href="#" className="text-green-600 hover:underline">
//                 Contact
//               </a>
//             </p>
//           </div>
//         </div>
//       </motion.div>

//       {/* Footer bottom */}
//       <motion.div
//         className="relative z-10 mt-12 text-center space-y-4"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.2, duration: 1 }}
//       >
//         <div className="flex justify-center gap-4">
//           {[Mail, Linkedin, Twitter, Instagram].map((Icon, i) => (
//             <a
//               key={i}
//               href="#"
//               className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-[rgb(16,253,228)] transition-transform duration-300 hover:scale-110"
//             >
//               <Icon size={18} />
//             </a>
//           ))}
//         </div>
//         <p className="text-[rgb(22,78,99)] font-semibold tracking-widest text-sm md:text-base">
//           © BLOCKCHAIN
//         </p>
//       </motion.div>

//       <style>
//         {`
//           @keyframes gradient-move {
//             0% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//             100% { background-position: 0% 50%; }
//           }
//           .animate-gradient-move {
//             animation: gradient-move 6s ease infinite;
//             background-size: 200% 200%;
//           }
//         `}
//       </style>
//     </footer>
//   );
// }
import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, Instagram } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function CryptoFooter() {
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
    <footer className="relative overflow-hidden bg-gradient-to-br from-white via-[#b2f0e9] to-white animate-gradient-move text-black py-16 px-4 sm:px-6 lg:px-10 font-sans">
      {/* Background Effects */}
      <div className="absolute right-0 top-0 bottom-10 w-1/5 opacity-20 z-0 animate-pulse bg-[radial-gradient(#111_1px,transparent_0.5px)] [background-size:16px_16px] pointer-events-none" />
      <div
        ref={bubbleRef}
        className="absolute inset-0 overflow-hidden z-0 pointer-events-none"
      >
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="bubble absolute bg-cyan-100 opacity-25 rounded-full mix-blend-overlay"
            style={{
              width: `${60 + Math.random() * 80}px`,
              height: `${60 + Math.random() * 80}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo */}
        <div className="space-y-4 mx-auto sm:mx-0">
          <img
            src="/logo.svg"
            alt="Blockchain Logo"
            className="w-28 sm:w-32 mx-auto sm:mx-0"
          />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-[rgb(22,78,99)]">
            Blockchain
          </h2>
        </div>

        {/* Menu */}
        <div className="space-y-3 mx-auto sm:mx-0">
          <h3 className="font-semibold text-lg md:text-xl text-gray-900 border-b border-black/10 pb-1">
            Menu
          </h3>
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            // { name: "Approach", path: "/approach" },
            { name: "Services", path: "/services/web3-security" },
            // { name: "Insights", path: "/insights" },
            { name: "Contact", path: "/contact" },
          ].map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="group flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base text-gray-800 hover:text-green-700 transition duration-300"
            >
              <span className="group-hover:translate-x-1 transition-transform">➤</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Legal */}
        <div className="space-y-3 mx-auto sm:mx-0">
          <h3 className="font-semibold text-lg md:text-xl text-gray-900 border-b border-black/10 pb-1">
            Legal
          </h3>
          {["Privacy Policy", "Cookie Policy", "Terms and Conditions", "Statement on Unsolicited Outreach by Recruitment Agencies"].map((item, i) => (
            <a
              key={i}
              href="#"
              className="block text-sm sm:text-base text-gray-700 hover:text-green-700 transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="space-y-4 mx-auto sm:mx-0">
          <h3 className="font-semibold text-lg md:text-xl text-gray-900 border-b border-black/10 pb-1">
            Contact Us
          </h3>
          <div className="text-sm text-gray-800 space-y-2">
            <p>
              <strong>Email:</strong>
              <br />
              <a
                href="mailto:info@blockchain.com"
                className="text-green-600 hover:underline"
              >
                blockchain@.com
              </a>
            </p>
            <p>
              <strong>Telegram:</strong>
              <br />
              <a href="#" className="text-green-600 hover:underline">
                @Blochchainc
              </a>
            </p>
            <p>
              <strong>Send us a message:</strong>
              <br />
              <Link to="/contact" className="text-green-600 hover:underline">
                Contact
              </Link>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Footer bottom */}
      <motion.div
        className="relative z-10 mt-12 text-center space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <div className="flex justify-center gap-4">
          {[Mail, Linkedin, Twitter, Instagram].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-[rgb(16,253,228)] transition-transform duration-300 hover:scale-110"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
        <p className="text-[rgb(22,78,99)] font-semibold tracking-widest text-sm md:text-base">
          © BLOCKCHAIN
        </p>
      </motion.div>

      <style>
        {`
          @keyframes gradient-move {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-move {
            animation: gradient-move 6s ease infinite;
            background-size: 200% 200%;
          }
        `}
      </style>
    </footer>
  );
}