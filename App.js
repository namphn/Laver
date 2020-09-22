import React, { useEffect } from "react"
import Navigation from "./navigation"
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "./reducers"
import { useDispatch, useSelector } from "react-redux"
import { AsyncStorage } from 'react-native'
import { composeWithDevTools } from "remote-redux-devtools"

console.disableYellowBox = true;

let composeEnhancers = composeWithDevTools({
  realtime: true,
  name: 'Your Instance Name',
  hostname: 'localhost',
  port: 19002
});

const store = createStore(
  rootReducer,
  composeEnhancers()
)

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

