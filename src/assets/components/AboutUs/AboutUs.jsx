import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css";
import aboutUs1 from "../../images/aboutUs/home-image-1.png";
import aboutUs2 from "../../images/aboutUs/home-icon-2.png";
import aboutUs3 from "../../images/aboutUs/home-icon-3.png";
import aboutUs4 from "../../images/aboutUs/home-icon-4.png";

const AboutUs = () => {
  return (
    <>
      <Row className="aboutUs">
        <Col xs={4}>
          <div>
            <div className="aboutUs-title">
              Sizi mutlu eden hi̇zmetler sunuyoruz
            </div>

            <div className="aboutUs-text">Temizliğe önem veriyoruz</div>
          </div>
        </Col>

        <Col xs={4}>
          <img src={aboutUs1} className="aboutUs-image" />
        </Col>

        <Col xs={4}>
          <div>
            <a href="tel:+905555555555" className="aboutUs-title">
              0555 555 55 55
            </a>
          </div>

          <div className="aboutUs-text">Hemen Arayın!</div>
        </Col>
      </Row>

      <div className="aboutUs-title-ghost">Neden Biz?</div>
      <div>
        <Row>
          <Col xs={4} className="aboutUs-item">
            <img src={aboutUs2} alt="#" className="aboutUs-icon" />
            <p className="aboutUs-icon-text">Garantili Hizmet</p>
          </Col>
          <Col xs={4} className="aboutUs-item">
            <img src={aboutUs3} alt="#" className="aboutUs-icon" />
            <p className="aboutUs-icon-text">Uygun Fiyat</p>
          </Col>
          <Col xs={4} className="aboutUs-item">
            <img src={aboutUs4} alt="#" className="aboutUs-icon" />
            <p className="aboutUs-icon-text">Ücretsiz Servis</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AboutUs;
