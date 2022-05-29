import React from "react";

export default function ProductList({ products }) {
  if (products == null || products.length === 0) {
    return <h5 className="p-2">No Products</h5>;
  } else {
    return products.map((product) => (
      <div className="card m-1 p-1 bg-light" key={product.id}>
        <h4>
          {product.name}
          <span class="badge badge-pill badge-secondary bg-primary">
            ${product.price.toFixed(2)}
          </span>
        </h4>
        <div className="card-text bg-white p-1">
          {product.description}
          <button className="btn btn-success btn-sm float-right">
            Add To Cart
          </button>
        </div>
      </div>
    ));
  }
}