import React from "react";
import CardGrid from "../../components/cardgrid";
import CryptoServices from "../../components/web3";
import monitoring from "../../assets/monitoring.png";
import pc from "../../assets/pc.png";
import CryptoHologramCTA from "../../components/hologram";
import about from "../../assets/about.png"
import { link } from "framer-motion/client";
export default function Services() {
  return (
    <>
      <CryptoServices
        headingSection={{
          subheadline: "Privacy and Security in a Decentralized World",
          headline:
            "Crypto, Blockchain, DeFi, Web3 Security & Privacy Services",
          description:
            "The emergence of Crypto, Blockchain, DeFi, and Web3 technologies has revolutionized the way we approach finance, governance, and digital interactions. These decentralized and distributed systems offer unprecedented opportunities for innovation, efficiency, and democratization. However, they also introduce new complexities and risks that require specialized attention to security and privacy..",
        }}
        serviceSection={{
          title: "All Our Services",
          services: [
                     {
                       label:
                         "Crypto, Blockchain, DeFi, Web3 Security & Privacy Services",
                       link: "/Services/web3-security",
                     },
                     {
                       label: "Crypto Financial Crime Services",
                       link: "/Services/Crypto-financial-crime-services",
                     },
                     { label: "Crypto-due-diligence" ,
                       link: "/Services/crypto-due-diligence",
                     },
                   ],
          description: [
            "Organizations venturing into the world of digital finance must navigate a landscape filled with potential vulnerabilities and evolving threat vectors. Crypto, Blockchain, DeFi, Web3 Security & Privacy Services are not merely optional; they are essential for responsible participation in this dynamic ecosystem. These services provide a comprehensive approach to safeguarding digital assets, protecting user privacy, ensuring regulatory compliance, and building trust among stakeholders.",
            " ",
            "The emergence of Crypto, Blockchain, DeFi, and Web3 technologies has revolutionized the way we approach finance, governance, and digital interactions. These decentralized and distributed systems offer unprecedented opportunities for innovation, efficiency, and democratization. However, they also introduce new complexities and risks that require specialized attention to security and privacy.",
            "More than a blockchain specialist security company, Cryptosec is an enterprise cybersecurity and privacy company that specializes in decentralization technologies. From securing smart contracts and managing cryptographic keys to monitoring transactions and ensuring data integrity, Cryptosec set of Crypto, Blockchain, DeFi, Web3 Security & Privacy Services offer tailored solutions that address the unique challenges of decentralized technologies. ",
          ],
        }}
        imageTextSection={{
          imageSrc: monitoring,
          text: [
            "By combining “traditional” cybersecurity, privacy and regulatory compliance skills with almost a decade of focused blockchain and crypto cybersecurity experience our team is perfectly positioned to support institutional adoption of decentralization technologies.",
            "We can help you secure your solutions and your organization end-to-end. From leading board-level enterprise cybersecurity awareness sessions; providing a level of comfort to your investors, insurers, and regulators; to hands-on development of innovative cryptographic protocols with proven security characteristics, in-depth smart contract audits, or development and integration of security monitoring agents.",
            "And, if your controls fail, our specialist incident response and investigative company – Crypto Investigators – can help you contain the impacts of successful attacks.",
          ],
        }}
        imageTextStaticSection={{
          imageSrc: pc,
          text: [
            "Cryptosec’s Crypto Assets Risk Transfer service offers innovative risk transfer advice tailored to the needs of companies operating with crypto assets. Our team is comprised of actuaries, former attorneys and claims specialists with deep knowledge of all forms of relevant financial and professional insurance coverage options. This diverse range of expertise allows us to provide a comprehensive service that covers all aspects of crypto assets risk transfer.",
          ],
        }}
        ctaText={{
          title: "Ready to Investigate?",
          subtitle: "Let our crypto team secure your assets.",
          button: "Contact US",
        }}
        ctaLink="/contact"
      />
      <CardGrid />
      <CryptoHologramCTA
        backgroundImage={about}
        heading=" we manage Crypto, Blockchain, DeFi, Web3 Security & Privacy Services"
        subheading=" We’re waiting to hear from you"
        ctaLink="/contact"
        ctaText="Contact Us"
      />
    </>
  );
}
