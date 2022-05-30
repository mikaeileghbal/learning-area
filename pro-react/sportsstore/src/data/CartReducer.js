import { ActionTypes } from "./Types";

export const CartReducer = (storeDate, action) => {
  let newData = { cart: [], cartItems: 0, cartPrice: 0, ...storeDate };
  switch (action.type) {
    case ActionTypes.CART_ADD:
      console.log("reduce product:", action.payload.product);
      const p = action.payload.product;
      const q = action.payload.quantity;
      console.log(p.id);
      let exist = newData.cart.find((item) => item.product.id === p.id);
      console.log("exist: ", exist);
      if (exist) {
        exist.quantity += q;
      } else {
        console.log("new cart item");
        newData.cart = [...newData.cart, action.payload];
      }
      newData.cartItems += q;
      newData.cartPrice += p.price * q;
      console.log("new Data:", newData);
      return newData;

    case ActionTypes.CART_UPDATE:
      newData.cart = newData.cart.map((item) => {
        if (item.product.id === action.payload.product.id) {
          const diff = action.payload.quantity - item.quantity;
          newData.cartItems += diff;
          newData.cartPrice += item.product.price * diff;
          return action.payload;
        } else {
          return item;
        }
      });
      return newData;

    case ActionTypes.CART_REMOVE:
      let selection = newData.cart.find(
        (item) => item.product.id === action.payload.id
      );
      newData.cartItems -= selection.quantity;
      newData.cartPrice -= selection.quantity * selection.product.price;
      newData.cart = newData.cart.filter((item) => item !== selection);
      return newData;

    case ActionTypes.CART_CLEAR:
      return { ...newData, cart: [], cartItems: 0, cartPrice: 0 };

    default:
      return storeDate || {};
  }
};
