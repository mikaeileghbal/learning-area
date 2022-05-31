import { Link } from "react-router-dom";
import CartDetailsRows from "./CartDetailsRows";

export default function CartDetails({
  cart,
  cartItems = 0,
  cartPrice = 0,
  updateCartQuantity,
  removeFromCart,
}) {
  const getLinkClasses = () =>
    `btn btn-secondary m-1  ${cartItems === 0 ? "disabled" : ""}`;

  return (
    <div className="m-3">
      <h2 className="text-center">Your Cart</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Profuct</th>
            <th className="text-right">Price</th>
            <th className="text-right">Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <CartDetailsRows
            cart={cart}
            cartPrice={cartPrice}
            updateQuantity={updateCartQuantity}
            removeFromCart={removeFromCart}
          />
        </tbody>
      </table>
      <div className="text-center">
        <Link to="/products" className="btn btn-primary m-1">
          Continue Shopping
        </Link>
        <Link to="/checkout" className={getLinkClasses()}>
          Checkout
        </Link>
      </div>
    </div>
  );
}
