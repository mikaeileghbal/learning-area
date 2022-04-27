import React from "react";

const ProductList = () => {
  return (
    <div>
      <Product />
    </div>
  );
};

export default ProductList;

const Product = () => {
  return (
    <div className="item">
      <div className="image">
        <img className="item-img" src="./images/male.png" alt="" />
      </div>
      <div className="content">
        <div className="description">
          <a href="#">Fort Knight</a>
          <p>Authentic renaissance actors, delivered in just two weeks.</p>
        </div>
        <div className="extra">
          <span>Submited by:</span>
          <img src="./images/female.png" alt=""></img>
        </div>
      </div>
    </div>
  );
};
