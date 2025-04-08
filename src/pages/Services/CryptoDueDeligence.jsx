import React from "react";
import CardGrid from "../../components/cardgrid";
import CryptoServices from "../../components/web3";
import monitoring from "../../assets/monitoring.png";
import pc from "../../assets/pc.png";
import CryptoHologramCTA from "../../components/hologram";
import about from "../../assets/about.png";
import people_with_pc from "../../assets/people_with_pc.png";
import team_meat from "../../assets/team_meat.png";
import boy_with_pc from "../../assets/boy_with_pc.png";
import { link } from "framer-motion/client";
import WhyChooseUs from "../../components/whychoose";
export default function DueDiligence() {
  const items = [
    {
      title: "Proof of Reserve / Proof of Solvency Due Diligence",
      content:
        "Proof of Reserve due diligence ensures that protocols do not engage in secretive fractional-reserve activity and are not exposed to larger risks than claimed. Our Proof of Reserve enables the reliable and timely monitoring of on-chain reserve assets at any custodian that enables public-facing attestations of their reserves. For more in-depth analysis, we can provide auditor-driven Proof of Liabilities review, which all together can provide a comprehensive Proof of Solvency picture. See more here: Proof of Solvency.",
    },
    {
      title: "Blockchain Research for Business Intelligence",
      content:
        "You need to know where a business’s funds are coming from and where they’re going before making good investment decisions. When it comes to DeFi, that means deep blockchain research to discover potential risks due to unfairly distributed initial token allocations, irregular market activity, and other on-chain finance metrics that can have a detrimental impact on crypto investments. Our investigations can inform your business intelligence and help you make important strategic decisions.",
    },
    {
      title: "Blockchain Research for Due Diligence",
      content:
        "The risks in DeFi are numerous, but often stem from a lack of transparency. Not only do you want to know who is behind a project, you also need to make sure the code is properly audited and functional. Furthermore, it should be compliant with regulations in your geographic location. Trust our team to conduct deep and comprehensive crypto investigations to guide your due diligence process.",
    },
    {
      title: "Blockchain Research for Competitor Analysis",
      content:
        "As web3 developers and technology producers, we know you’re busy. Allow our team of highly-qualified crypto investigations and research professionals to conduct your technical competitor analysis and inform your technical investment, competitive positioning, token allocation, ICO decision-making process.",
    },
    {
      title: "Post-Investment Monitoring",
      content:
        "Our services extend beyond the point of investment, offering continuous monitoring to detect any suspicious activities or red flags.",
    },
    {
      title: "Time Sensitive Requirements",
      content:
        "When time is of the essence and delays would cause severe consequences, Cryptosec can react rapidly to recover and prevent major critical losses.",
    },
    {
      title: "Objectivity",
      content:
        "Where there is a need for honest, objective feedback and advice free from politics and self-interest, Cryptosec is adept to give dispassionate and impartial advice to settle outcomes objectively.",
    },
  ];
  return (
    <>
      <CryptoServices
        headingSection={{
          subheadline:
            "Crypto Investigation Services for Business Intelligence and Due Diligence",
          headline: "Crypto Investigations for Due Diligence",
          description:
            "In the fast-paced and complex world of digital assets, proactive due diligence is key to safeguarding your investments and reputation.",
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
            { label: "Cybersecurity & Privacy" },
          ],
          description: [
            "Crypto investigations and crypto due diligence are crucial for assessing the risks and compliance associated with crypto-related activities, whether it’s a business partnership, investment opportunity, competitive intelligence, or regulatory inquiry. They provide a detailed understanding of the parties involved, the nature of the transactions, the source of funds, and adherence to legal and regulatory requirements. In an environment where transparency, legality, and trust are paramount, Crypto Investigations for Due Diligence act as a safeguard, ensuring that engagements with crypto assets are conducted responsibly and ethically.",
            "",
            "As cryptocurrencies continue to reshape the financial landscape, Crypto Investigations for Due Diligence will remain an indispensable tool for risk assessment, compliance, and responsible participation in the digital economy.",
          ],
        }}
        imageTextSection={{
          imageSrc: team_meat,
          text: [
            "At Cryptosec, together with our specialist Crypto Investigators business, we offer specialized crypto investigations for due diligence and business intelligence, arming you with in-depth insights to ensure every decision you make is informed, precise, and secure.",
            "Our team, composed of digital forensics experts, blockchain analysts, and cybersecurity professionals, takes a meticulous approach to assessing potential risks and evaluating the credibility of your crypto investments. We aid businesses, law firms, corporate entities, and regulatory bodies in making prudent decisions concerning crypto asset interactions.",
             "Don’t let the complexities of the crypto world compromise your peace of mind. Allow Cryptosec to ensure the transparency, compliance, and security of your digital asset interactions. Contact us today to learn how our Crypto Investigations for Due Diligence can protect your investments and enhance your decision-making process."
          ],
        }}
        imageTextStaticSection={{
          imageSrc: people_with_pc,
          text: [
            "When it comes to business, you need the best.", 

           "Our partners are prominent and esteemed members of the global cybersecurity community recognized by their peers for technical proficiency and blockchain investigations competency. Each has 20+ years of experience in law enforcement and global investigations along with an extensive network of contacts in legal and financial sectors and numerous relevant global and international certifications in Cryptocurrency Tracing, Digital Forensics, Fraud Detection, Legal Investigations, Financial Crime, Cybersecurity and others.",
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
      <WhyChooseUs
        imageUrl={boy_with_pc}
        title="What We Do?"
        subtitle="We can produce maximally insightful blockchain intelligence reports that help guide crypto investment strategies for venture capital firms and individual investors. 

We can track funding from cryptocurrency and DeFi, ICOs to NFT mints and other types of digital asset investments to inform business strategies and avoid potential losses due investment fraud, embezzlement, and other cybercrimes."
        items={items}
      />
      <CryptoHologramCTA
        backgroundImage={about}
        heading=" Reduce your Risks Now "
        subheading="Allow our highly-qualified crypto researchers to help."
        ctaLink="/contact"
        ctaText="Contact Us"
      />
    </>
  );
}
