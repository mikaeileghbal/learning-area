import { Link } from "react-router-dom";
import CartDetailsRows from "./CartDetailsRows";

export default function CartDetails({
  cart,
  cartPrice,
  updateCartQuantity,
  removeFromCart,
}) {
  return (
    <div>
      <h2>Your Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Profuct</th>
            <th>Price</th>
            <th>Subtotal</th>
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
      <div>
        <Link to="/products">Continue Shopping</Link>
        <Link to="/checkout">Checkout</Link>
      </div>
    </div>
  );
}
