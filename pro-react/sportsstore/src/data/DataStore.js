import { createStore } from "redux";
import { CartReducer } from "./CartReducer";
import { CommonReducer } from "./CommonReducer";
import { ShopReducer } from "./ShopReducer";

export const sportsStoreDataStore = createStore(
  CommonReducer(ShopReducer, CartReducer)
);
