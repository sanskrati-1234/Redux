import CalculatorReducer from "./calculator/reducer";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  calculator: CalculatorReducer,
});

export default rootReducer;
