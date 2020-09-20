import React, { useEffect } from "react"
import Navigation from "./navigation"
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "./reducers"
import { useDispatch, useSelector } from "react-redux"
import { AsyncStorage } from 'react-native';

console.disableYellowBox = true;

const store = createStore(
  rootReducer
)

_retrieveData = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token !== null) {
      console.log(token);
    } else {
      
    }
  } catch (error) {

  }
};

export default function App() {

  useEffect(() => {

  }, [])

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

