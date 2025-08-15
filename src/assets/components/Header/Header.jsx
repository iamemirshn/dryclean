import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Whatsapp } from "../../images/icons/index";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsSidebarOpen(false); // Ekran genişlediğinde menüyü kapat
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Row className="header">
        <Col xs={12} md={4} className="header-logo">
          <Link to="/" className="header-logo-link">
            Dry Cleaning
          </Link>
        </Col>

        <Col xs={12} md={4} className="header-link">
          <Link to="/" className="header-link-item">
            Anasayfa
          </Link>
          <Link to="/AboutUs" className="header-link-item">
            Hakkımızda
          </Link>
          <Link to="/OurServices" className="header-link-item">
            Hizmetlerimiz
          </Link>
          <Link to="/Contact" className="header-link-item">
            İletişim
          </Link>
        </Col>

        <Col xs={12} md={4} className="header-social">
          <Link
            to="https://www.facebook.com"
            target="_blank"
            alt="facebook"
            className="header-social-link"
          >
            <Facebook className="header-social-icon" />
          </Link>
          <Link
            to="https://www.instagram.com/"
            target="_blank"
            alt="instagram"
            className="header-social-link"
          >
            <Instagram className="header-social-icon" />
          </Link>
          <Link
            to="https://wa.me/905555555555"
            target="_blank"
            alt="whatsapp"
            className="header-social-link"
          >
            <Whatsapp className="header-social-icon" />
          </Link>
        </Col>

        {/* Menü açma/kapama düğmesi */}
        <div className="header-menu-toggle" onClick={toggleSidebar}>
          ☰
        </div>

        {/* Menü çubuğu */}
        <div className={`header-sidebar ${isSidebarOpen ? "open" : ""}`}>
          {/* Sosyal medya ikonları sidebar'ın en üstüne taşındı */}
          <div className="header-sidebar-social">
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              alt="facebook"
              className="header-social-link"
            >
              <Facebook className="header-social-icon" />
            </Link>
            <Link
              to="https://www.instagram.com/"
              target="_blank"
              alt="instagram"
              className="header-social-link"
            >
              <Instagram className="header-social-icon" />
            </Link>
            <Link
              to="https://wa.me/905555555555"
              target="_blank"
              alt="whatsapp"
              className="header-social-link"
            >
              <Whatsapp className="header-social-icon" />
            </Link>
          </div>

          {/* Menü linkleri */}
          <div className="header-sidebar-links">
            <Link
              to="/"
              className="header-sidebar-item"
              onClick={toggleSidebar}
            >
              Anasayfa
            </Link>
            <Link
              to="/AboutUs"
              className="header-sidebar-item"
              onClick={toggleSidebar}
            >
              Hakkımızda
            </Link>
            <Link
              to="/OurServices"
              className="header-sidebar-item"
              onClick={toggleSidebar}
            >
              Hizmetlerimiz
            </Link>
            <Link
              to="/Contact"
              className="header-sidebar-item"
              onClick={toggleSidebar}
            >
              İletişim
            </Link>
          </div>
        </div>
      </Row>
    </>
  );
};

export default Header;
