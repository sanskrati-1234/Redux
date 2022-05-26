import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import Calculator from "./calculator";
import Reverse from "./reverse";

function App() {
  const [count, setCount] = useState(0);
  const store = configureStore({
    reducer: rootReducer,
  });
  return (
    // <Provider store={store}>
    //   <div className="App">
    //     <Calculator />
    //   </div>
    // </Provider>
    <Reverse />
  );
}

export default App;
