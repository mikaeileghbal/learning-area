import React from "react";
import { Link } from "react-router-dom";

export default function CartSummary({ cartItems, cartPrice }) {
  console.log("in summary:", cartItems);
  const getSummary = () => {
    console.log("get summary:", cartItems);
    if (cartItems > 0) {
      return (
        <span>
          {cartItems} item(s), ${cartPrice.toFixed(2)}
        </span>
      );
    } else {
      return <span>Your cart: (empty)</span>;
    }
  };

  const getLinkClasses = () => {
    return `btn btn-sm bg-dark  tet-white ${cartItems === 0 ? "disabled" : ""}`;
  };

  return (
    <div className="float-right">
      <small>
        {getSummary()}
        <Link to="/cart" className={getLinkClasses()}>
          <i
            className="fa fa-shopping-cart"
            style={{ color: "white", float: "right" }}
          ></i>
        </Link>
      </small>
    </div>
  );
}
