import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [showForm, setShowForm] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with real API call)
    const response = await fetch('/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    setIsSubmitting(false);
    setResponseMessage(result.message || 'Thank you for contacting us!');
  };

  // Show form with scroll animation
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setShowForm(true);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className=" relative   pt-16  bg-gradient-to-br from-white via-[#b2f0e9] to-white  animate-gradient-move text-[rgb(22,78,99)] py-10 px-4 md:px-16 lg:px-24">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: "110vh", opacity: 0.5 }}
            transition={{ duration: 8 + i * 0.6, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
            className="absolute w-6 h-3 bg-[rgb(16,253,228)] opacity-20 rounded-md"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}px`,
            }}
          />
        ))}
      </div>
       {/* Animated Background Squares */}
       <div className="absolute left-4 sm:left-10 top-10 w-32 sm:w-40 h-32 sm:h-40 grid grid-cols-4 gap-2 opacity-20 z-0 animate-pulse-slow">
        {Array.from({ length: 200 }).map((_, i) => (
          <div key={i} className="w-2 sm:w-3 h-2 sm:h-3 border border-gray-800 border-dotted"></div>
        ))}
      </div>   
      {/* Glowing Effect in Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="planet absolute rounded-full bg-[rgb(111,207,151)] opacity-30 mix-blend-overlay"
            style={{
              width: `${60 + Math.random() * 80}px`,
              height: `${60 + Math.random() * 80}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `orbit ${8 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Form with Scroll Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: showForm ? 1 : 0, y: showForm ? 0 : -20 }}
        transition={{ duration: 0.8 }}
        className="bg-white bg-opacity-50 p-6 rounded-lg shadow-lg max-w-5xl mx-auto mb-12 backdrop-blur-md    "
      >
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8">Contact Us</h2>
        <p className="font-semibold text-lg md:text-xl text-center pb-10">
          Please fill out the form below, and we will get back to you shortly.
        </p>

        {/* Response message */}
        {responseMessage && (
          <div className="text-center text-lg font-semibold text-green-500 mb-6">{responseMessage}</div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Name */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col space-y-2"
            >
              <label htmlFor="name" className="font-semibold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(111,207,151)] w-full"
              />
            </motion.div>

            {/* Email */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col space-y-2"
            >
              <label htmlFor="email" className="font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(111,207,151)] w-full"
              />
            </motion.div>

            {/* Mobile */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col space-y-2"
            >
              <label htmlFor="mobile" className="font-semibold">Mobile</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(111,207,151)] w-full"
              />
            </motion.div>

            {/* Address */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col space-y-2"
            >
              <label htmlFor="address" className="font-semibold">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(111,207,151)] w-full"
              />
            </motion.div>

            {/* Message */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col space-y-2"
            >
              <label htmlFor="message" className="font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(111,207,151)] w-full"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-8 bg-[rgb(16,253,228)] text-white font-bold text-lg rounded-md hover:bg-[rgb(111,207,151)] focus:outline-none disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </motion.button>
          </div>
        </form>
      </motion.div>

      <style>{`
        @keyframes orbit {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
          100% { transform: rotate(360deg); }
        }
        .planet {
          animation: orbit 10s linear infinite;
        }

        @media (max-width: 640px) {
          .planet {
            animation-duration: 15s;
          }
        }
      `}</style>
    </div>
  );
}
