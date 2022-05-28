import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { configureStore } from "@reduxjs/toolkit";
import displayReducer from "./display/reducer";
import Display from "./display";
import { Provider } from "react-redux";
function App() {
  const [count, setCount] = useState(0);
  const store = configureStore({
    reducer: { displayReducer },
  });
  return (
    <div className="App">
      <Provider store={store}>
        <Display />
      </Provider>
    </div>
  );
}

export default App;
