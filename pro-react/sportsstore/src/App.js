import { ShopConnector } from "./shop/ShopConnector";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

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
