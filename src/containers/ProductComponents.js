import React from "react";
import { useSelector } from "react-redux";

const ProductComponents = () => {
  const products = useSelector((state) => state.allProducts.products);
  const { id, title } = products[0];
  return (
    <div className="four column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img src="" alt="" />
          </div>
          <div className="content">
            <div className="header">{title}</div>
            <div className="meta price">$ </div>
            <div className="meta"></div>
          </div>
        </div>
      </div>
      <h1>ProductComponents</h1>
    </div>
  );
};

export default ProductComponents;
