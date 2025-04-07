import React from "react";
import { motion } from "framer-motion";
import { LockKeyhole, DollarSign, ShieldCheck } from "lucide-react";
import about3 from "../assets/about3.jpg"; // You can replace this with actual image path

const CryptoSecurityInfo = () => {
  return (
    <div className="bg-gradient-to-br pt-16 pb-16 from-white via-[#b2f0e9] to-white text-[rgb(22,78,99)] py-10 px-6 md:px-16 lg:px-24">
      <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center pt-8">
        {/* Left side: Text and Icons */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-sm text-gray-700 leading-relaxed"
        >
          <p>
            Cryptosec covers the field to ensure enterprise leaders can safely
            access crypto and DeFi and interoperate with enterprise blockchains,
            other distributed ledger technologies (Hashgraph, IOTA, for
            instance), derivative technologies (Blockchain Lightning Network,
            DApps, Cross-Chains, Layer 0-3 Solutions, Hyperledger Fabric, R3
            Corda, Smart Contracts, to name a few), with formal approvals,
            security clearances, and expert guidance.{" "}
          </p>

          <p>
            With Cryptosec’s cybersecurity, financial crime and regulatory
            compliance offerings, enterprise leaders can securely develop and
            benefit from decentralized solutions and access crypto assets –
            through DeFi, AltFi, DeFi arbitrage and DeFi Products (Staking,
            Yield Farming, Trading, Liquidity Pools), Smart Contracts, Web3 and
            the Metaverse. Enterprises can also leverage Non-Financial DLTs and
            Chains for logistics, administration, tokenization and governance,
            whilst positively satisfying their complex compliance, approval and
            regulatory requirements, with world-class cybersecurity and
            financial crime standards and protections.
          </p>

          <p>
            Our team of accredited cybersecurity, privacy, financial crime, and
            compliance experts claim deep and rich experienced leading crypto,
            DeFi, and blockchain relevant engagements; smart contract audits;
            crypto investigations; as well as acting as Interim Chief
            Information Security Officers (CISOs), Crypto Compliance Officers,
            Chief Anti-Money Laundering Officers (CAMLO), Trusted Advisors and
            Investigators for FinTechs, DeFi DAOs, AltFi DAOs, ICOs, Blockchain
            Organizations, Crypto Custodian Service Providers, Crypto Hedge
            Funds, and Private Crypto Investors throughout each stage of the
            crypto security & investigations lifecycle.
          </p>
        </motion.div>

        {/* Right side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 shadow-xl p-2 z-0"></div>
          <img
            src={about3}
            alt="Security Icon"
            className="shadow-2xl transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl max-w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] object-cover mx-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CryptoSecurityInfo;
