import React from "react";
import AboutSection from "../../components/aboutsection";

import CryptoHologramCTA from "../../components/hologram";
import about from "../../assets/about.png";
import about2 from "../../assets/about2.png";

export default function WhyChooseUs() {
  return (
    <>
      <AboutSection
        title1="Experience"
        text1="  Cryptosec provides only experienced senior-level practitioners and ex-industry executives from both the crypto-native and institutional sides of the industry to solve the challenges that face enterprise clients.."
        image1={about}
        title2="Exemplary Compliance & Governance"
        text2=" Compliance and governance must be achieved to a certain standard before solutions can be implemented. We set the standards in Enterprise-Grade Crypto Security."
        image2={about2}
        title3="  New Technology Security"
        text3="   Traditional cybersecurity no longer offers the same level of protection to enterprises in crypto and DeFi practice. Responsible enterprises know the value of enlisting our security intelligence to outthink and stay ahead of the advancements in technology, not fall behind them."
        title4="Particular Expertise"
        text4=" On-demand requirement for senior technical expertise with relevant market experience. Not just to act as an adviser, but also to roll up their sleeves and manage the delivery of business outcomes."
        title5="Time Sensitive Requirements"
        text5="  When time is of the essence and delays would cause severe consequences, Cryptosec and our specialist Crypto Investigators service can react rapidly to recover and prevent major critical losses."
        title6="Objectivity"
        text6="  Where there is a need for honest, objective feedback and advice free from politics and self-interest, Cryptosec is adept to give dispassionate and impartial advice to settle outcomes objectively."
      />

<CryptoHologramCTA
        backgroundImage={about}
        heading="   Let us help you realize and protect the"
        subheading="  benefits of the new  economy"
        ctaLink="/contact"
        ctaText="Contact Us"
      />
    </>
  );
}
