import React, { useCallback, useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { loadData } from "../data/ActionCreators";
import {
  addToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
} from "../data/CartActionCreators";
import { DataTypes } from "../data/Types";
import Shop from "./Shop";
import CartDetails from "./CartDetails";

const mapStateToProps = (dataStore) => ({
  ...dataStore,
});

const mapDispatchToProps = {
  loadData,
  addToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
};

const filterProducts = (products = [], category) => {
  console.log("inside filter: ", category);
  return !category || category === "All"
    ? products
    : products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
};

export const ShopConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopConnectorPresent);

function ShopConnectorPresent({
  categories,
  products,
  loadData,
  cart,
  cartItems,
  cartPrice,
  updateCartQuantity,
  removeFromCart,
  addToCart,
}) {
  const { category } = useParams();
  console.log(category);

  const [, updateState] = useState();

  useEffect(() => {
    updateState("");
  }, [category]);

  useEffect(() => {
    loadData(DataTypes.CATEGORIES);
    loadData(DataTypes.PRODUCTS);
  }, [loadData]);

  return (
    <Routes>
      <Route
        path="/products/:category"
        element={
          <FilteredShop
            cartItems={cartItems}
            cartPrice={cartPrice}
            categories={categories}
            products={products}
            addToCart={addToCart}
          />
        }
      />
      <Route
        path="/products"
        element={
          <Shop
            cartItems={cartItems}
            cartPrice={cartPrice}
            categories={categories}
            products={products}
            addToCart={addToCart}
          />
        }
      />
      <Route
        path="/cart"
        element={
          <CartDetails
            cart={cart}
            cartItems={cartItems}
            cartPrice={cartPrice}
            updateCartQuantity={updateCartQuantity}
            removeFromCart={removeFromCart}
          />
        }
      />
    </Routes>
  );
}

function FilteredShop({ categories, products, cartItems, cartPrice }) {
  const { category } = useParams();
  return (
    <Shop
      categories={categories}
      products={filterProducts(products, category)}
      addToCart={addToCart}
      cartItems={cartItems}
      cartPrice={cartPrice}
    />
  );
}
