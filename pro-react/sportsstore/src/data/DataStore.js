import { applyMiddleware, createStore } from "redux";
import { asyncActions } from "./AsyncMiddleware";
import { CartReducer } from "./CartReducer";
import { CommonReducer } from "./CommonReducer";
import { ShopReducer } from "./ShopReducer";

export const SportsStoreDataStore = createStore(
  CommonReducer(ShopReducer, CartReducer),
  applyMiddleware(asyncActions)
);
