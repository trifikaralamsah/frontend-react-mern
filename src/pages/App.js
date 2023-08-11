import React from "react";
import RoutesDom from "../config/Routes";
import { Provider } from "react-redux";
import { store } from "../config";

function App() {
  return (
    // provider react-redux
    <Provider store={store}>
      <RoutesDom />
    </Provider>
  );
}

export default App;
