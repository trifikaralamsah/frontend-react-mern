import React from "react";
import { Provider } from "react-redux";
import { store, RoutesDom } from "../config";

function App() {
  // const a = store.subscribe(() => {
  //   console.log(store.getState());
  // })
  return (
    // provider react-redux
    <Provider store={store}>
      <RoutesDom />
    </Provider>
  );
}

export default App;
