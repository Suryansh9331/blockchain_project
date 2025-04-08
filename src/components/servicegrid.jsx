import { motion } from "framer-motion";
import { FaShieldAlt, FaEye } from "react-icons/fa";

const ServicesGrid = () => {
  const boxData = [
    {
      icon: (
        <FaShieldAlt
          size={50}
          className="text-[rgb(111,207,151)] mb-4 mx-auto"
        />
      ),
      title: "CRYPTO, BLOCKCHAIN, WEB3 SECURITY, PRIVACY",
      subtitle:
        "We deliver purpose-built assessments, security strategies, advice, architecture and implementations.",
      points: [
        { text: "Blockchain Security",  },
        { text: "Crypto Security", },
        { text: "Cybersecurity", },
        { text: "Smart Contract Audits", },
        { text: "Web3 Threat Intelligence", },
      ],
    },
    {
      icon: (
        <FaEye size={50} className="text-[rgb(111,207,151)] mb-4 mx-auto" />
      ),
      title: "CRYPTO INVESTIGATIONS & INCIDENT RESPONSE",
      subtitle:
        "Utilizing high-level blockchain forensics to recover digital assets and uncover cybercrime.",
      points: [
        { text: "Crypto Investigations" },
        { text: "Blockchain Forensics" },
        { text: "Crypto Tracing" },
        { text: "Compliance Analytics" },
        { text: "Digital Asset Recovery" },
      ],
    },
    {
      icon: (
        <FaShieldAlt
          size={50}
          className="text-[rgb(111,207,151)] mb-4 mx-auto"
        />
      ),
      title: "COMPLIANCE & REGULATION",
      subtitle:
        "Helping enterprises meet regulatory requirements in crypto and Web3.",
      points: [
        { text: "KYC/AML Compliance" },
        { text: "Risk Assessment" },
        { text: "Audit Trail" },
        { text: "Reporting Standards" },
        { text: "Policy Management" },
      ],
    },
    {
      icon: (
        <FaEye size={50} className="text-[rgb(111,207,151)] mb-4 mx-auto" />
      ),
      title: "CYBERCRIME MONITORING",
      subtitle:
        "Detect and mitigate cyber threats across blockchain infrastructure.",
      points: [
        { text: "Real-Time Threat Detection" },
        { text: "Anomaly Monitoring" },
        { text: "Dark Web Tracking" },
        { text: "Fraud Detection" },
        { text: "Incident Reporting" },
      ],
    },
    {
      icon: (
        <FaShieldAlt
          size={50}
          className="text-[rgb(111,207,151)] mb-4 mx-auto"
        />
      ),
      title: "SMART CONTRACT AUDITS",
      subtitle:
        "Ensure security and correctness of smart contracts before deployment.",
      points: [
        { text: "Automated Scanning" },
        { text: "Manual Review"},
        { text: "Security Analysis" },
        { text: "Gas Optimization"},
        { text: "Code Validation" },
      ],
    },
    {
      icon: (
        <FaEye size={50} className="text-[rgb(111,207,151)] mb-4 mx-auto" />
      ),
      title: "DIGITAL ASSET RECOVERY",
      subtitle:
        "Track and recover lost, stolen, or inaccessible digital assets.",
      points: [
        { text: "Forensics Tools" },
        { text: "Chain Analysis" },
        { text: "Wallet Recovery" },
        { text: "Scam Tracing" },
        { text: "Expert Witness" },
      ],
    },
    {
      icon: (
        <FaShieldAlt
          size={50}
          className="text-[rgb(111,207,151)] mb-4 mx-auto"
        />
      ),
      title: "PRIVACY & DATA PROTECTION",
      subtitle: "Comprehensive privacy solutions for blockchain apps.",
      points: [
        { text: "Data Minimization" },
        { text: "Encryption Protocols" },
        { text: "GDPR Compliance"},
        { text: "Zero-Knowledge Proofs" },
        { text: "User Consent Management"},
      ],
    },
    {
      icon: (
        <FaEye size={50} className="text-[rgb(111,207,151)] mb-4 mx-auto" />
      ),
      title: "BLOCKCHAIN ANALYTICS",
      subtitle:
        "Insightful blockchain data for governance and decision-making.",
      points: [
        { text: "On-Chain Analysis" },
        { text: "Token Monitoring" },
        { text: "DeFi Risk Scores" },
        { text: "DApp Intelligence" },
        { text: "Trend Forecasting"},
      ],
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-[#fef3f3]/80 to-[#fff] animate-gradient-move py-16 sm:py-24 px-4 sm:px-10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-30 z-0 animate-pulse bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <div className="absolute left-10 top-10 w-40 h-40 grid grid-cols-4 gap-2 opacity-20 z-0 animate-pulse-slow">
        {Array.from({ length: 460 }).map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 border border-gray-800 border-dotted"
          ></div>
        ))}
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: "110vh", opacity: 0.5 }}
            transition={{
              duration: 8 + i * 0.6,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
            className="absolute w-6 h-3 bg-[rgb(16,253,228)] opacity-20 rounded-md"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}px`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center px-2 sm:px-4">
          <p className="text-lg sm:text-2xl uppercase font-bold tracking-widest text-cyan-900">
            Our Services
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight drop-shadow-md">
            Risk Management, Crypto Security, and Crypto Compliance Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-2 sm:px-0">
          {boxData.map((box, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              className="bg-gradient-to-br from-white via-[#b2f0e9] to-white rounded-3xl shadow-2xl p-6 sm:p-10 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(111,207,151,0.6)] hover:border hover:border-[rgb(111,207,151)] hover:bg-[rgb(17,253,228)] hover:text-black"
            >
              {box.icon}
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900 uppercase tracking-wide">
                {box.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base mb-5">
                {box.subtitle}
              </p>
              <ul className="text-sm sm:text-base text-gray-800 space-y-1 text-left pl-4 list-disc">
                {box.points.map((point, idx) => (
                  <li key={idx}>
                    <a
                      href={point.link}
                      className="text-green-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {point.text}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="/Services/web3-security"
                className="mt-6 inline-block px-5 py-2 text-sm sm:text-base border border-green-400 rounded-md text-gray-800 bg-[rgb(16,253,228)] hover:text-black transition duration-300"
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
