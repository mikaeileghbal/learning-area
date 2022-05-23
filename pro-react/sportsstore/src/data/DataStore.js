import { createStore } from "redux";
import { ShopReducer } from "./ShopReducer";

export const sportsStoreDataStore = createStore(ShopReducer);
