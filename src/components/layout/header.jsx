// Header.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Header({ title, description, links }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const bubbleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header className="relative min-h-screen overflow-hidden pt-12 pb-2 mt-0 font-kanit bg-[length:200%_200%] bg-gradient-to-br from-white via-[#b2f0e9] to-white animate-gradient-move">
      {/* Animated Background Squares */}
      <div className="absolute left-4 sm:left-10 top-10 w-32 sm:w-40 h-32 sm:h-40 grid grid-cols-4 gap-2 opacity-20 z-0 animate-pulse-slow">
        {Array.from({ length: 300 }).map((_, i) => (
          <div
            key={i}
            className="w-2 sm:w-3 h-2 sm:h-3 border border-gray-800 border-dotted"
          ></div>
        ))}
      </div>

      {/* Bubble Animation Background */}
      <div
        ref={bubbleRef}
        className="absolute inset-0 overflow-hidden z-0 pointer-events-none"
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="bubble absolute bg-cyan-100 opacity-25 rounded-full mix-blend-overlay"
            style={{
              width: `${60 + Math.random() * 80}px`,
              height: `${60 + Math.random() * 80}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${
                8 + Math.random() * 10
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-10 pb-20 pt-10 sm:pt-20 md:pt-28 max-w-7xl mx-auto text-center lg:text-left">
        <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-normal leading-tight">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="text-[40px] sm:text-[48px] md:text-[60px] text-[rgb(111,207,151)] font-light"
          >
            {title || "Protecting The"}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
            className="text-gray-900 font-semibold"
          >
            {description || "Decentralized Future"}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 1.1, duration: 0.5, ease: "easeOut" }}
            className="mt-3 flex justify-center lg:justify-start"
          >
            <div className="w-20 h-1 bg-[rgb(111,207,151)] rounded-sm" />
          </motion.div>
        </div>

        {/* Dynamic Info Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {links.map((box, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.3 + i * 0.2,
                    duration: 0.5,
                    ease: "easeOut",
                  },
                }),
              }}
              className="rounded-xl border border-[rgb(111,207,151)] px-6 py-8 bg-transparent hover:bg-[rgb(19,254,229)] transition-all duration-300 shadow-md hover:shadow-xl backdrop-blur-lg text-center"
            >
              <a
                href={box.href}
                className="text-base sm:text-lg font-weight-600 text-gray-800 hover:text-[rgb(22,78,99)] transition-colors duration-300"
              >
                {box.title}
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* "Learn More" Button - Positioned at Bottom Right of the Header */}
      <a
        href="#"
        className="absolute bottom-8  right-16 bg-[rgb(16,253,228)] text-gray-800 px-5 py-2 text-sm sm:text-base border border-green-400 rounded-md hover:text-black transition duration-300 flex items-center space-x-2"
        style={{ zIndex: 9999 }}
      >
        <span>Learn More ➤</span>
      </a>

      <style>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          animation: gradient-move 6s ease infinite;
        }
      `}</style>
    </header>
  );
}
