// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout"; 
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import WhyChooseUs from "./pages/About/why_choose_us";
import Services from "./pages/Services/Services";
import FinancialCrime from "./pages/Services/CryptoFinancialCrime";
import DueDiligence from "./pages/Services/CryptoDueDeligence";
export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about/why_choose_us" element={<WhyChooseUs />} />
          <Route path="/Services/web3-security" element={<Services/>} />
          <Route path="/Services/crypto-financial-crime-services" element={<FinancialCrime/>} />
          <Route path="/Services/crypto-due-diligence" element={<DueDiligence/>} />

        </Routes>
      </Layout>
    </Router>
  );
}
