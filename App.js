import React, { useEffect } from "react"
import Navigation from "./navigation"
import { Provider,useDispatch } from "react-redux"
import rootReducer from "./reducers"
import {createStore} from "redux"
import {loginAction} from "./actions/autthenAction"

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

