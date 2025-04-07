// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout"; // Import the Layout component
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WhyChooseUs from "./pages/why_choose_us";
import Services from "./pages/Services";
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

        </Routes>
      </Layout>
    </Router>
  );
}
