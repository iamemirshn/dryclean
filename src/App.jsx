import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";
import Home from "./assets/pages/Home/Home";
import AboutUs from "./assets/pages/AboutUs/AboutUs";
import OurServices from "./assets/pages/OurServices/OurServices";
import ContactUs from "./assets/pages/ContactUs/ContactUs";
import { FaWhatsapp } from "react-icons/fa";
import DeliveryReturns from "./assets/pages/DeliveryReturns/DeliveryReturns";

import PrivacyPolicy from "./assets/pages/PrivacyPolicy/PrivacyPolicy";

function App() {
  return (
    <>
      <Container fluid className="app-container">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/OurServices" element={<OurServices />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/DeliveryReturns" element={<DeliveryReturns />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
      </Container>
      <Footer />

      {/* WhatsApp İkonu ve Açıklama */}
      <div className="whatsapp-wrapper">
        <a
          href="https://wa.me/905555555555" // WhatsApp numaranızı buraya ekleyin
          className="whatsapp-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={40} />
        </a>
        <div className="whatsapp-tooltip">Bizimle İletişime Geçin</div>
      </div>
    </>
  );
}

export default App;
