import React from "react";
import CardGrid from "../../components/cardgrid";
import CryptoServices from "../../components/web3";
import monitoring from "../../assets/monitoring.png";
import pc from "../../assets/pc.png";
import CryptoHologramCTA from "../../components/hologram";
import about from "../../assets/about.png"
import people_with_pc from "../../assets/people_with_pc.png"
import team_meat from "../../assets/team_meat.png"
import { link } from "framer-motion/client";
export default function FinancialCrime() {
  return (
    <>
      <CryptoServices
        headingSection={{
          subheadline: "Privacy and Security in a Decentralized World",
          headline:
            "Crypto Financial Crime and Regulatory Compliance Services",
          description:
            "“Financial Crimes” is a term used to describe a variety of criminal acts including money laundering; terrorism financing; bribery; corruption; sanctions violations; proliferation financing; cyber financial crime; various types of fraud (securities fraud, insider trading, market manipulation, bank fraud, insurance fraud, payments fraud, health care fraud, medical fraud, credit card fraud, cheque fraud, corporate fraud, and other types of frauds and scams); and other crimes against property.",
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
            "In recent years, financial crimes have become a multi-billion dollar global phenomenon with criminal methodologies adapting and changing faster than governments, legislators, enforcement agencies and businesses can keep up. The associated risks to business and financial institutions are very real and can lead to regulatory fines, reputational damage, loss of customer base and even imprisonment.",
            "In light of the recent revelations, crypto businesses will have to confront increasingly complex compliance requirements as they are being held to stricter standards of accountability in matters of financial crime. At the same time, customers are demanding a better customer experience. ",
            "We are the industry leader in crypto financial crime, anti-money laundering (AML) and know-your-customer (KYC) compliance and services for crypto and DeFi ventures. As former TradFi bank examiners and compliance professionals, we understand the regulator’s approach to compliance and can develop an approach compliant with current regulatory requirements developed for TradFi, while taking advantage of latest AI and blockchain technologies, and educating relevant regulators.. ",
          ],
        }}
        imageTextSection={{
          imageSrc: team_meat,
          text: [
          
            "Structured to reflect the increasingly complex, cyber-enabled, and multi-disciplinary nature of crypto financial crimes involving crypto assets, Cryptosec has assembled a global team of professionals with backgrounds in crypto, blockchain, cybersecurity, anti-money laundering, sanctions, counter-bribery/corruption, fraud prevention and examination, audit, regulatory compliance as well as advanced analytics and machine learning.",
            "Cryptosec advises global governments, financial regulators, law enforcement and institutions across the banking, capital markets, asset management, and insurance industries on financial crimes investigation; financial crimes prevention cost reduction and productivity improvements; and enhanced regulatory compliance with the particular focus on crypto and DeFi sphere.",
          ],
        }}
        imageTextStaticSection={{
          imageSrc: people_with_pc,
          text: [
            "Cryptosec advises global governments, financial regulators, law enforcement and institutions across the banking, capital markets, asset management, and insurance industries on financial crimes investigation; financial crimes prevention cost reduction and productivity improvements; and enhanced regulatory compliance with the particular focus on crypto and DeFi sphere.",
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
        heading=" we manage Crypto Financial Crime and Regulatory Compliance Services "
        subheading=" We’re waiting to hear from you"
        ctaLink="/contact"
        ctaText="Contact Us"
      />
    </>
  );
}
