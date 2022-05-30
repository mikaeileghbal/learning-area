export default function CartDetailsRows({
  cart,
  cartPrice,
  updateQuantity,
  removeFromCart,
}) {
  const handleChange = (product, e) => {
    updateQuantity(product, e.target.value);
  };
  if (!cart || cart.length === 0) {
    return (
      <tr>
        <td colSpan={5}>Your cart is empty</td>
      </tr>
    );
  } else
    return (
      <>
        {cart.map((item) => (
          <tr key={item.product.id}>
            <td>
              <input
                type="number"
                value={item.quantuty}
                onChange={(e) => handleChange(item.product, e)}
              />
            </td>
            <td>{item.product.name}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>{(item.quantity * item.product.price).toFixed(2)}</td>
            <td>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => removeFromCart(item.product)}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <th colSpan="3">Total:</th>
          <th colSpan="2">${cartPrice.toFixed(2)}</th>
        </tr>
      </>
    );
}
