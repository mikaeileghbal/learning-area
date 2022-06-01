import { ShopConnector } from "./shop/ShopConnector";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { SportsStoreDataStore } from "./data/DataStore";

function App() {
  return (
    <Provider store={SportsStoreDataStore}>
      <BrowserRouter>
        <ShopConnector />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
