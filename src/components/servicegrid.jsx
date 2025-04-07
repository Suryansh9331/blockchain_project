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
        { text: "Blockchain Security", link: "/blockchain-security" },
        { text: "Crypto Security", link: "/crypto-security" },
        { text: "Cybersecurity", link: "/cybersecurity" },
        { text: "Smart Contract Audits", link: "/smart-contract-audits" },
        { text: "Web3 Threat Intelligence", link: "/web3-threat-intelligence" },
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
        { text: "Crypto Investigations", link: "/crypto-investigations" },
        { text: "Blockchain Forensics", link: "/blockchain-forensics" },
        { text: "Crypto Tracing", link: "/crypto-tracing" },
        { text: "Compliance Analytics", link: "/compliance-analytics" },
        { text: "Digital Asset Recovery", link: "/digital-asset-recovery" },
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
        { text: "KYC/AML Compliance", link: "/kyc-aml-compliance" },
        { text: "Risk Assessment", link: "/risk-assessment" },
        { text: "Audit Trail", link: "/audit-trail" },
        { text: "Reporting Standards", link: "/reporting-standards" },
        { text: "Policy Management", link: "/policy-management" },
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
        { text: "Real-Time Threat Detection", link: "/real-time-threat" },
        { text: "Anomaly Monitoring", link: "/anomaly-monitoring" },
        { text: "Dark Web Tracking", link: "/dark-web-tracking" },
        { text: "Fraud Detection", link: "/fraud-detection" },
        { text: "Incident Reporting", link: "/incident-reporting" },
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
        { text: "Automated Scanning", link: "/automated-scanning" },
        { text: "Manual Review", link: "/manual-review" },
        { text: "Security Analysis", link: "/security-analysis" },
        { text: "Gas Optimization", link: "/gas-optimization" },
        { text: "Code Validation", link: "/code-validation" },
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
        { text: "Forensics Tools", link: "/forensics-tools" },
        { text: "Chain Analysis", link: "/chain-analysis" },
        { text: "Wallet Recovery", link: "/wallet-recovery" },
        { text: "Scam Tracing", link: "/scam-tracing" },
        { text: "Expert Witness", link: "/expert-witness" },
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
        { text: "Data Minimization", link: "/data-minimization" },
        { text: "Encryption Protocols", link: "/encryption-protocols" },
        { text: "GDPR Compliance", link: "/gdpr-compliance" },
        { text: "Zero-Knowledge Proofs", link: "/zk-proofs" },
        { text: "User Consent Management", link: "/consent-management" },
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
        { text: "On-Chain Analysis", link: "/on-chain-analysis" },
        { text: "Token Monitoring", link: "/token-monitoring" },
        { text: "DeFi Risk Scores", link: "/defi-risk-scores" },
        { text: "DApp Intelligence", link: "/dapp-intelligence" },
        { text: "Trend Forecasting", link: "/trend-forecasting" },
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
                      className="text-blue-900 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {point.text}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#"
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
