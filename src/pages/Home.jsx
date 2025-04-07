import { useState } from "react";
import MissionSection from "../components/mission";
import ExpertiseSection from "../components/expertise";
import ServicesGrid from "../components/servicegrid";
import WhyChooseUs from "../components/whychoose";
import CryptoAlternatingSections from "../components/alternateimg";
import CryptoHologramCTA from "../components/hologram";
import about from "../assets/about.png";
import tripleImg from "../assets/tripleImg.png";
import bitcoin from "../assets/bitcoin.jpg";
import scientist from "../assets/scientist.png";
import about3 from "../assets/about3.jpg";
import menwithpc from "../assets/menwithpc.png";
export default function Home() {
  const [topbarHeight, setTopbarHeight] = useState(48); // default to visible
  const [showSearch, setShowSearch] = useState(false);
  const sections = [
    {
      title: "The Boundaries are Unclear, Great Enterprises are Not",
      description:
        " Blockchain and related technologies have already begun to revolutionize the ways in which users can organize data, value (ownership) and processes. But the corresponding regulatory and technological boundaries remain largely unsettled. Even the practical difference between centralized and decentralized finance beg to be universally defined. The reality is that it may take another decade to set clear boundaries for the playing field to a level befitting enterprise standards. Meanwhile, enterprise decision-makers face tremendous pressures to take advantage of – what is now widely accepted as – the unstoppable, inevitable changes sweeping across industries – with enterprise blockchains and related technologies; or else pay the very real opportunity costs of falling behind their blockchain-adopting competitors. The bottom line is that the technology and regulations could persist without clear direction for some time, but great enterprises cannot",
      image: scientist,
      link: "/crypto-security",
      ctaText: "Learn More",
    },
    {
      title: "How Does “Crypto Security” Differ From “Cybersecurity”?",
      description:
        " Cybersecurity refers to the classical practices formulated from the 1970s onward to protect computer systems, networks, and programs from digital attacks – such as malware, viruses, phishing, backdoor, and other attacks. These approaches and technologies were formulated before the diffusion of new, cryptography-based emerging technologies (blockchain, cryptocurrencies and more) and solutions.  Crypto Security is a term that the industry has reclaimed (beyond its archaic uses in early military and communications technology vernacular) to describe the cybersecurity practices that extend into cryptography-based decentralization technologies such as distributed ledger technologies, blockchain, cross-chains networks, and their uses for DeFi, smart contracts, crypto assets and web3 – technologies that attract crypto-specific risks that cannot be mitigated by “traditional” cybersecurity controls alone.",
      image: bitcoin,
      link: "/investigations-lifecycle",
      ctaText: "Discover Life Cycle",
    },
    {
      title: "The Crypto Security & Investigations Life Cycle",
      description:
      "Cryptosec takes a holistic approach to crypto security & investigations, to anticipate, pinpoint & deliver targeted solutions for the critical crypto security & investigation needs of enterprise clients – pegged to their position within the crypto security & investigations life cycle – backed by tailored solutions to achieve comprehensive, end-to-end enterprise-grade crypto security coverage.  We guide enterprise clients to apprise & safely leverage distributed ledger technologies, cryptocurrencies, and other decentralization technologies in line with best  practices, to grant clients the Enterprise-Level Security Clearances they need to commence operations with formal approvals.",      
      image:about3,
      link: "/outstanding-security",
      ctaText: "Secure Assets Now",
    },
    {
      title: "How We Deliver?",
      description:
"We work with our clients to assess and manage crypto risks and regulatory compliance including, through defining new target operating models, selecting and advising on the right technology solutions and transforming teams.We can work closely with your own firm’s investigators or we can provide investigative assistance through well-respected and experienced financial crime and cybercrime investigators.We guide clients to solve critical business challenges with seasoned financial crimes, cybersecurity and regulatory compliance executives. When you have a critical, time-sensitive business challenge and lack the appropriate internal resources, our experienced interim managers can be your solution. All of our interim executives have over 15 years of relevant experience.",
      image: menwithpc,
      link: "/custodial-security",
      ctaText: "Explore Custodial Security",
    },
  ];

  const items = [
    {
      title: "Combined Experience",
      content:
        "Cryptosec brings together highly-experienced practitioners from both the crypto-native and institutional sides of the industry covering every aspect of operational and technology risk management.",
    },
    {
      title: "Senior Level Experience",
      content:
        "Cryptosec provides only experienced senior-level practitioners and ex-industry executives to solve the challenges that face enterprise clients.",
    },
    {
      title: "Exemplary Compliance & Governance",
      content:
        "Compliance and governance must be achieved to a certain standard before solutions can be implemented. Cryptosec sets the standards in Enterprise-Grade Crypto Security & Crypto Investigations.",
    },
    {
      title: "New Technology Security",
      content:
        "Traditional cybersecurity no longer offers the same level of protection to enterprises in crypto and DeFi practice. Responsible enterprises know the value of enlisting Cryptosec’s security expertise to outthink and stay ahead of the advancements in technology, not fall behind them. ",
    },
    {
      title: "Particular Expertise",
      content:
        "On-demand requirement for senior technical expertise with relevant market experience. Not just to act as an adviser, but also to roll up their sleeves and manage the delivery of business outcomes.",
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
      {/* <Header /> */}
      <MissionSection />
      <ExpertiseSection />
      <ServicesGrid />
      <WhyChooseUs
        imageUrl={tripleImg}
        title="Why Choose CryptoSec?"
        subtitle="Protecting Your Digital Future"
        items={items}
      />
      <CryptoAlternatingSections sections={sections} />
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
