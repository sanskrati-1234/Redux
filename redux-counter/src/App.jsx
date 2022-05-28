import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import CountReducer from "./reducer";
import Counter from "./Counter";
function App() {
  const [count, setCount] = useState(0);
  const store = configureStore({
    reducer: { CountReducer },
  });

  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
