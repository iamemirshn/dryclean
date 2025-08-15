import "./Slider.css";
import slider1 from "../../images/slider/slider-1.png";
import slider2 from "../../images/slider/slider-2.png";
import slider3 from "../../images/slider/slider-3.png";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider-image">
        <img src={slider1} className="slider-image-item" alt="Slider 1" />
        <img src={slider2} className="slider-image-item" alt="Slider 2" />
        <img src={slider3} className="slider-image-item" alt="Slider 3" />
      </div>

      <div>
        <div className="slider-title">Kurutemizleme Servisi</div>
        <p className="slider-text">Sizi mutlu eden hizmetler sunuyoruz</p>
      </div>
    </div>
  );
};

export default Slider;
