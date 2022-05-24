import React, { useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { loadData } from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import Shop from "./Shop";

const mapStateToProps = (dataStore) => ({
  ...dataStore,
});

const mapDispatchToProps = { loadData };

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

function ShopConnectorPresent({ categories, products, loadData }) {
  const { category } = useParams();

  console.log("category param: ", category);

  loadData(DataTypes.CATEGORIES);
  loadData(DataTypes.PRODUCTS);

  return (
    <Routes>
      <Route
        path="/products"
        element={<Shop categories={categories} products={products} />}
      />
      <Route
        path="/products/:category"
        element={
          <Shop
            categories={categories}
            products={filterProducts(products, useParams().category)}
          />
        }
      />
    </Routes>
  );
}
