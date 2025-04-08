// components/MegaMenu.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const megaMenuItems = {
  about: [
    {
      title: "➤About Blockchain",
      description: "",
      link: "/about",
    },
    {
      title: "➤Why Choose Us",
      link: "/about/why_choose_us",
    },
   
  ],
  services: [
    {
      title: "➤ Crypto, Blockchain, DeFi, Web3 Security & Privacy Services",

      link: "/Services/web3-security",
    },
    {
      title: "➤ Crypto Financial Crime Services",

      link: "/Services/Crypto-financial-crime-services",
    },
    {
      title: "➤ Crypto Due Diligence",

      link: "/Services/crypto-due-diligence",
    },
   
  ],
};

export default function MegaMenu({ isOpen, onClose, title, submenuData }) {
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const items = megaMenuItems[submenuData] || [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-md flex items-start justify-center pt-24 px-6"
        >
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full max-w-7xl bg-gradient-to-br from-white via-[#b2f0e9] to-white rounded-2xl shadow-2xl p-10 text-gray-800 relative"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-600 hover:text-red-500 text-2xl font-bold"
              aria-label="Close Mega Menu"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6 ">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {items.map((item, index) => (
                <div key={index} className="relative">
                  <Link
                    to={item.link}
                    className="block group cursor-pointer"
                    onClick={() =>
                      item.submenu
                        ? setOpenSubmenuIndex(
                            openSubmenuIndex === index ? null : index
                          )
                        : onClose()
                    }
                  >
                    <h3 className="font-semibold text-lg mb-1 flex items-center justify-between hover:text-sky-900">
                      {item.title}
                      {item.submenu && <span className="text-sm ml-2 ">▼</span>}
                    </h3>
                    <p className="text-sm group-hover:text-cyan-700 transition">
                      {item.description}
                    </p>
                  </Link>

                  {item.submenu && openSubmenuIndex === index && (
                    <div className="mt-4 ml-2 pl-4 border-l border-gray-300 ">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          to={subItem.link}
                          key={subIndex}
                          onClick={onClose}
                          className="block mb-2 group"
                        >
                          <h4 className="text-sm font-medium group-hover:text-cyan-800">
                            {subItem.title}
                          </h4>
                          <p className="text-xs text-gray-600 group-hover:text-cyan-700">
                            {subItem.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
