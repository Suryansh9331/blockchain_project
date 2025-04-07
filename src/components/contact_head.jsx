import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaTelegramPlane,
  FaGlobe,
} from "react-icons/fa";

export default function ContactHeader() {
  return (
    <div className="bg-gradient-to-br pt-32 pb- from-white via-[#b2f0e9] to-white animate-gradient-move text-[rgb(22,78,99)] py-10 px-4 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute right-0 top-0 bottom-10 w-1/5 opacity-20 z-0 animate-pulse bg-[radial-gradient(#111_1px,transparent_0.5px)] [background-size:16px_16px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white bg-opacity-50 p-6 rounded-lg shadow-lg max-w-5xl mx-auto mb-12 backdrop-blur-md shadow-xl"
      >
        <p className="font-semibold text-lg md:text-xl text-center pb-10 pt-10">
          Please be aware that our services cater exclusively to corporations,
          law firms, and law enforcement agencies. Regrettably, we are not able
          to assist individual victims of cryptocurrency scams. We recommend
          reporting the incident to your local law enforcement and seeking
          assistance from a law firm, which can contact us on your behalf when
          our expertise is required.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto text-center pt-10 pb-10">
        {/* Email Icon */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center space-y-2"
        >
          <a href="mailto:blockchain@gmail.com">
            <FaEnvelope className="text-4xl text-[rgb(22,78,99)]" />
          </a>
          <h3 className="text-xl font-bold">Email</h3>
          <p className="text-sm">blockchain@gmail.com</p>
        </motion.div>

        {/* Phone Icon */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center space-y-2"
        >
          <a href="tel:+97144096785">
            <FaPhoneAlt className="text-4xl text-[rgb(22,78,99)]" />
          </a>
          <h3 className="text-xl font-bold">Phone</h3>
          <p className="text-sm">UAE HQ: +971 4 409 6785</p>
        </motion.div>

        {/* Telegram Icon */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center space-y-2"
        >
          <a href="https://t.me/Blockchain">
            <FaTelegramPlane className="text-4xl text-[rgb(22,78,99)]" />
          </a>
          <h3 className="text-xl font-bold">Telegram</h3>
          <p className="text-sm">@Blockchain</p>
        </motion.div>

        {/* Location Icon */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center space-y-2"
        >
          <a href="https://www.google.com/maps/place/UAE">
            <FaGlobe className="text-4xl text-[rgb(22,78,99)]" />
          </a>
          <h3 className="text-xl font-bold">Location</h3>
          <p className="text-sm">We operate globally 24/7</p>
        </motion.div>
      </div>
    </div>
  );
}
