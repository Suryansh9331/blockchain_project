import React from "react";
import { FaShieldAlt, FaRegMoneyBillAlt, FaTools, FaNetworkWired } from "react-icons/fa";  // Import icons

const CardGrid = () => {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-32 bg-gradient-to-br from-white via-[#b2f0e9]/80 to-white text-[rgb(22,78,99)]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="bg-[#b2f0e9] bg-opacity-30 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
            <FaShieldAlt className="text-4xl text-green-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cybersecurity</h3>
            <p className="text-lg text-gray-700">
              We provide top-notch cybersecurity solutions to secure your digital assets.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-[#b2f0e9] bg-opacity-30 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
            <FaRegMoneyBillAlt className="text-4xl text-green-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Compliance</h3>
            <p className="text-lg text-gray-700">
              We ensure that your blockchain, crypto, and DeFi solutions comply with global regulations.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-[#b2f0e9] bg-opacity-30 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
            <FaTools className="text-4xl text-green-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tech Solutions</h3>
            <p className="text-lg text-gray-700">
              Tailored solutions for your tech needs, including blockchain integrations and more.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-[#b2f0e9] bg-opacity-30 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
            <FaNetworkWired className="text-4xl text-green-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Networking</h3>
            <p className="text-lg text-gray-700">
              Secure and reliable network solutions for decentralized systems and blockchain-based networks.
            </p>
          </div>
          {/* Card 5 */}
          <div className="bg-[#b2f0e9] bg-opacity-30 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
            <FaShieldAlt className="text-4xl text-green-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h3>
            <p className="text-lg text-gray-700">
              Protecting sensitive data with advanced encryption and privacy solutions.
            </p>
          </div>
          {/* Card 6 */}
          <div className="bg-[#b2f0e9] bg-opacity-30 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
            <FaRegMoneyBillAlt className="text-4xl text-green-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Risk Management</h3>
            <p className="text-lg text-gray-700">
              Helping you manage financial risks in the crypto and blockchain world with tailored strategies.
            </p>
          </div>
          {/* Card 7 */}
          <div className="bg-[#b2f0e9] bg-opacity-30 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
            <FaTools className="text-4xl text-green-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Blockchain Solutions</h3>
            <p className="text-lg text-gray-700">
              End-to-end blockchain solutions, from development to integration and scaling.
            </p>
          </div>
          {/* Card 8 */}
          <div className="bg-[#b2f0e9] bg-opacity-30 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
            <FaNetworkWired className="text-4xl text-green-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cloud Services</h3>
            <p className="text-lg text-gray-700">
              Offering cloud-based solutions for blockchain deployments and decentralized applications.
            </p>
          </div>
          {/* Card 9 */}
          <div className="bg-[#b2f0e9] bg-opacity-30 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
            <FaShieldAlt className="text-4xl text-green-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Security Audits</h3>
            <p className="text-lg text-gray-700">
              Comprehensive security audits for your blockchain and crypto projects to ensure safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
