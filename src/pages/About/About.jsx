
import React from 'react'
import AboutSection from "../../components/aboutsection"
import CryptoSecurityInfo  from "../../components/about_last"
import CryptoHologramCTA from "../../components/hologram";
import about from "../../assets/about.png";
import about2 from "../../assets/about2.png";

export default function About() {
  return (
   <>
  <AboutSection
        title1="About  Blockchain"
        text1="  Cryptosec is a leading cybersecurity firm specializing in the
               protection of the decentralized future of finance, governance, and
               more. We set the standards in enterprise-ready crypto, digital
               assets, blockchain, Web3, and CBDC security, compliance, and
               investigations. Our mission is to enable enterprise leaders to
               overcome cybersecurity, fraud, privacy, financial crime,
               infrastructure reliability, and regulatory risk to leverage
               enterprise blockchains/DLTs, crypto assets, DeFi, Web3, and
               related technologies.."
        image1={about}
        title4="Our Expertise"
        text4="  Our world-class expertise lies at the cross-sector of
               cybersecurity & privacy, financial crime risk management,
               monitoring, and investigations, regulatory compliance, and
               blockchain, distributed ledger, smart contracts, Web3, and related
               technologies. We perform cybersecurity, financial crime, and
               compliance assessments; crypto investigations; and deliver
               purpose-built security strategies, architecture, and advice so our
               enterprise clients can mitigate their multi-layered risks and
               demonstrate exemplary standards of trust & confidence with
               clients, stakeholders & regulators. To learn more about Cryptosec
               and our qualifications see Industry Qualifications as well as the
               qualifications of our specialist investigative business Crypto
               Investigators."
        image2={about2}
        title6="  Our Services"
        text="     We offer a comprehensive set of crypto security, compliance, and
              investigation services. Our services include critical security
              audits, purpose-built security strategies, advice, architecture,
              and implementations. We also provide high-level blockchain
              forensics tools and the most advanced techniques available to
              conduct comprehensive crypto investigations, uncover cybercrimes,
              and recover stolen digital assets.
              <br />
              <br />
              Our team works with enterprise decision-makers to achieve the
              highest standards of compliance for integrating blockchain
              networks, DLT, Web3, cryptocurrencies, and related technologies
              with their existing legacy systems, practices, and regulatory
              requirements. To learn more about Cryptosec services, see Crypto
              Security Services."
      />
   <CryptoSecurityInfo />
   <CryptoHologramCTA
        backgroundImage={about}
        heading="   Let us help you realize and protect the"
        subheading="  benefits of the new  economy"
        ctaLink="/contact"
        ctaText="Contact Us"
      />
         
   </>
  )
}










