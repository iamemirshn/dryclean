import React from "react";
import { Row } from "react-bootstrap";
import "./Products.css";
import TabMenu from "../TabMenu/TabMenu";

const Products = () => {
  return (
    <div className="product">
      <div className="product-title-ghost">Hizmetlerimiz</div>

      <Row className="product-navbar">
        <TabMenu />
      </Row>
    </div>
  );
};

export default Products;
