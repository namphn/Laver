import React, { useEffect } from "react"
import Navigation from "./navigation"
import { Provider } from "react-redux"
import store from "./store/store"

console.disableYellowBox = true;

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

