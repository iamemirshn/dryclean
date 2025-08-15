import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
import gömlek from "../../images/products/gömlekütü2.png";

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="card-product">
          <img
            src={gömlek}
            alt="OFF-white Red Edition"
            draggable="false"
            className="card-product-image"
          />
        </div>
        <div className="card-product-info">
          <h2>Gömlek Ütü</h2>
          <p>Profesyonel Ütü Hizmeti Adet</p>
          <div className="card-product-price">25 ₺</div>
        </div>
      </div>
    </>
  );
};

export default Card;
