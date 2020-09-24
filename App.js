import React, { useEffect } from "react"
import Navigation from "./navigation"
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "./reducers"

console.disableYellowBox = true;

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

