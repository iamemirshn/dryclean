// src/components/Footer.jsx
import { Row, Col, Container } from "react-bootstrap";
import "./Footer.css"; // CSS dosyasını içe aktarın
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <div className="footer-title">İletişim</div>
            <div className="footer-text">
              <p>
                Email:{" "}
                <a
                  href="mailto:drycleaningweb@email.com"
                  className="footer-link"
                >
                  bilgi@drycleaningweb.com
                </a>
              </p>
              <p>
                Telefon:{" "}
                <a href="tel:+905555555555" className="footer-link">
                  0555 555 55 55
                </a>
              </p>
              <p>
                Sabit Telefon:{" "}
                <a href="tel:+905555555555" className="footer-link">
                  0555 555 55 55
                </a>
              </p>
              <p>Adres: Sultanbeyli/İstanbul</p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="footer-title">Sayfalar</div>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link to="/OurServices" className="footer-link">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link to="/AboutUs" className="footer-link">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="footer-link">
                  İletişim
                </Link>
              </li>
              <li>
                <Link to="/DeliveryReturns" className="footer-link">
                  Teslimat ve İade Bildirimi
                </Link>
              </li>
              <li>
                <Link to="/PrivacyPolicy" className="footer-link">
                  Gizlilik Sözleşmesi
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <div className="footer-title">Güvenli Ödeme</div>
            <div className="footer-text">Mastercard & Visa</div>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">Dry Cleaning ©2024 Copyright</div>
    </footer>
  );
};

export default Footer;
