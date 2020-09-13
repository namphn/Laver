import React from "react"
import Navigation from "./navigation"
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "./reducers"
import { useDispatch, useSelector } from "react-redux"

const store = createStore(
  rootReducer
)

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

