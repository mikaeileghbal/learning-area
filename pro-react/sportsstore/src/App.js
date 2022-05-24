import { ShopConnector } from "./shop/ShopConnector";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Shop from "./shop/Shop";
import { sportsStoreDataStore } from "./data/DataStore";

function App() {
  return (
    <Provider store={sportsStoreDataStore}>
      <BrowserRouter>
        <ShopConnector />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
