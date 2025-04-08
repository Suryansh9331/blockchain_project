// components/Layout.jsx
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Topbar from "./layout/topbar";
import Navbar from "./layout/navbar";
import CryptoFooter from "./layout/footer";
import Header from "./layout/header";
import ContactHeader from "./contact_head"; 

export default function Layout({ children }) {
  const [topbarHeight, setTopbarHeight] = useState(48); 
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation(); 
  
  const showDynamicHeader = location.pathname !== "/contact";

 
  const [headerContent, setHeaderContent] = useState({
    title: "Default Title",
    description: "Default description",
    links: [{ title: "Default Link", href: "#" }],
  });

  // Update header content based on the current route
  useEffect(() => {
    const content = {
      "/home": {
        title: "Protecting The",
        description: "Decentralized Future",
        links: [
          { title: "CRYPTO INVESTIGATIONS & INCIDENT RESPONSE", href: "/Services/crypto-financial-crime-services" },
          {
            title: "CRYPTO ,BLOCKCHAIN,WEB3 SECURITY, TRUST & PRIVACY",
            href: "/Services/web3-security",
          },
          {
            title: "CRYPTO & DEFI COMPLIANCE & ANTI-FINANCIAL CRIME",
            href: "/Services/crypto-due-diligence",
          },
        ],
      },
      "/about": {
        title: "About Blockchain",
        description:
          " Our team of accredited cybersecurity, privacy, financial crime, and compliance experts",
        links: [
          {
            title:
              "Our team works with enterprise decision-makers to achieve the highest standards of compliance for integrating blockchain networks, DLT, web3, cryptocurrencies, and related technologies with their existing legacy systems, practices, and regulatory requirements. To learn more about Cryptosec services see Crypto Security Services.",
            href: "/Services/crypto-financial-crime-services",
          },
          {
            title:
              "Our world-class expertise lies at the cross-sector of cybersecurity & privacy, financial crime risk management, monitoring, and investigations, regulatory compliance, and blockchain, distributed ledger, smart contracts, Web3, and related technologies .",
            href: "/Services/web3-security",
          },
          {
            title:
              "Cryptosec is a leading cybersecurity firm specializing in the protection of the decentralized future of finance, governance, and more .",
            href: "/Services/crypto-due-diligence",
          },
        ],
      },

      "/about/why_choose_us": {
        title: "Why Choose Cryptosec-",
        description: "Your Trusted Partner in Decentralized World?",
        links: [],
      },
      "/Services/web3-security": {
        title: "Services",
        description:
          " Crypto, Blockchain, DeFi, Web3 Security & Privacy Services",
        links: [
          {
            title:
              "As digital finance, DeFi, Web3, and the adoption of blockchain solutions continue to grow, so do the complexity and potential risk of cyber incidents, fraud, and asset misappropriation.",
            href: "",
          },
          {
            title:
              "Having a robust incident response plan in place is vital to detect, contain, and mitigate any unauthorized activities swiftly.",
            href: "",
          },
          {
            title:
              " It ensures that organizations can act decisively in the face of a crisis, minimizing damage and preserving both assets and reputation.",
            href: "",
          },
        ],
      },
      "/Services/Crypto-financial-crime-services": {
        title: "Services",
        description:
          " Crypto Financial Crime Services",
        links: [
         
        ],
      },
      "/Services/Crypto-due-diligence": {
        title: "Services",
        description:
          " Crypto Due Diligence",
        links: [
         
        ],
      },
  
  
    };
    

    // Set dynamic content based on the current route
    setHeaderContent(content[location.pathname] || content["/home"]);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#b2f0e9] to-white animate-gradient-move">
      <Topbar onHeightChange={setTopbarHeight} />
      <Navbar setShowSearch={setShowSearch} topbarHeight={topbarHeight} />
      <div style={{ paddingTop: `${topbarHeight + 90}px` }}>
        {/* Conditionally render the dynamic header or the contact header */}
        {showDynamicHeader ? (
          <Header
            title={headerContent.title}
            description={headerContent.description}
            links={headerContent.links}
          />
        ) : (
          <ContactHeader /> 
        )}
      </div>
      <main>{children}</main>
      <CryptoFooter />
    </div>
  );
}
