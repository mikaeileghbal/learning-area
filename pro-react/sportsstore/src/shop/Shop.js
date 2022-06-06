import React from "react";
import { useNavigate } from "react-router-dom";
import CartSummary from "./CartSummary";
import CategoryNavigation from "./CategoryNavigation";
import ProductList from "./ProductList";

export default function Shop({
  categories,
  products,
  cartItems,
  cartPrice,
  addToCart,
}) {
  const navigate = useNavigate();

  const handleAddToCart = (...args) => {
    addToCart(...args);
    navigate("/cart");
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col bg-dark text-white d-flex justify-content-between align-items-center">
          <div className="navbar-brand">SPORTS STORE</div>
          <CartSummary cartItems={cartItems} cartPrice={cartPrice} />
        </div>
      </div>
      <div className="row">
        <div className="col-3 p-2">
          <CategoryNavigation categories={categories} baseUrl="/products" />
        </div>
        <div className="col-9 p-2">
          <ProductList products={products} addToCart={handleAddToCart} />
        </div>
      </div>
    </div>
  );
}
