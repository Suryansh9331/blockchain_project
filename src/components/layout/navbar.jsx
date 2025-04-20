import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logohead from "../../assets/logohead.png"
import {
  faEnvelope,
  faSearch,
  faChevronDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import MegaMenu from "./megamenu";

export default function Navbar({ topbarHeight = 48 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", mega: "about" },
    { name: "Services", mega: "services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`z-40 w-full fixed left-0 transition-all duration-500 bg-[length:200%_200%] bg-gradient-to-r mb-0 from-white via-[#b2f0e9] to-white animate-gradient-move pt-4  pb-4 ${
          isScrolled ? "backdrop-blur-2xl" : ""
        }`}
        style={{ top: `${topbarHeight}px` }}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 flex justify-between items-center">
  <Link
    to="/"
    className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-extrabold text-cyan-900 drop-shadow hover:scale-105 transition-transform duration-300"
  >
    <img
      src={logohead} // Replace with your logo image path
      alt="Logo"
      className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
    />
    BlockChain
  </Link>

  <ul className="hidden lg:flex flex-wrap gap-3 md:gap-6 lg:gap-10 pl-2 text-xs md:text-sm font-medium text-gray-900">
    {navItems.map((item, i) => (
      <li key={i} className="relative group">
        {item.mega ? (
          <button
            onClick={() => setActiveMenu(item.mega)}
            className="flex items-center gap-1 hover:text-cyan-800 transition duration-300 group-hover:underline"
          >
            {item.name}
            <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
          </button>
        ) : (
          <Link
            to={item.path}
            className="hover:text-cyan-800 transition duration-300 group-hover:underline"
          >
            {item.name}
          </Link>
        )}
      </li>
    ))}
  </ul>

  <div className="hidden lg:flex gap-3 md:gap-4 items-center text-gray-700 text-lg md:text-lg pr-1">
    <a
      href="mailto:your@email.com"
      title="Email"
      className="hover:text-cyan-800 transition-transform duration-300 hover:scale-110"
    >
      <FontAwesomeIcon icon={faEnvelope} />
    </a>
    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-cyan-800 transition-transform duration-300 hover:scale-110"
    >
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-cyan-800 transition-transform duration-300 hover:scale-110"
    >
      <FontAwesomeIcon icon={faTwitter} />
    </a>
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-cyan-800 transition-transform duration-300 hover:scale-110"
    >
      <FontAwesomeIcon icon={faInstagram} />
    </a>
    <button
      title="Search"
      onClick={() => setShowSearch(true)}
      className="hover:text-cyan-800 transition-transform duration-300 hover:scale-110"
    >
      <FontAwesomeIcon icon={faSearch} />
    </button>
  </div>

  <button
    className="lg:hidden text-lg sm:text-xl text-cyan-900 focus:outline-none"
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    aria-label="Toggle Menu"
  >
    <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
  </button>
</div>


        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/80 backdrop-blur px-4 pb-6 pt-4 shadow-md"
            >
              <ul className="space-y-3 text-gray-800 text-sm">
                {navItems.map((item, i) => (
                  <li key={i}>
                    {item.mega ? (
                      <button
                        className="flex items-center justify-between w-full font-semibold"
                        onClick={() => setActiveMenu(item.mega)}
                      >
                        {item.name}
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="ml-2 text-xs"
                        />
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        className="block font-medium hover:text-cyan-800"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex gap-4 text-base">
                <a href="mailto:your@email.com" title="Email">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <MegaMenu
        isOpen={activeMenu !== null}
        onClose={() => setActiveMenu(null)}
        title={activeMenu === "about" ? "About Us" : "Our Services"}
        submenuData={activeMenu}
      />

      {showSearch && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-md flex items-center justify-center px-4">
          <div className="relative w-full max-w-xl bg-white rounded-lg p-6 shadow-xl">
            <button
              onClick={() => setShowSearch(false)}
              className="absolute top-3 right-4 text-gray-600 text-xl"
              aria-label="Close Search"
            >
              ×
            </button>
            <input
              type="text"
              placeholder="Search..."
              autoFocus
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes gradient-move {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-move {
            animation: gradient-move 6s ease infinite;
          }
        `}
      </style>
    </>
  );
}
