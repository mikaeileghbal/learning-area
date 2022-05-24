import { ActionTypes } from "./Types";

export const CartReducer = (storeDate, action) => {
  let newData = { cart: [], cartItems: 0, cartPrice: 0, ...storeDate };
  switch (action.type) {
    case ActionTypes.CART_ADD:
      const p = action.payload.product;
      const q = action.payload.quantity;

      let exist = newData.find((item) => item.product.id === p.id);
      if (exist) {
        exist.quantity += q;
      } else {
        newData.cart = [...newData.cart, action.payload];
      }
      newData.cartItems += q;
      newData.cartPrice += p.price * q;
      return newData;

    case ActionTypes.CART_UPDATE:
      return newData;

    case ActionTypes.CART_REMOVE:
      return newData;

    case ActionTypes.CART_CLEAR:
      return newData;

    default:
      return storeDate || {};
  }
};
