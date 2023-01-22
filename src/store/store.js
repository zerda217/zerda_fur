import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./feature/cartSlice";
import { combineReducers } from "redux";

const reducer = combineReducers({
  cart: CartReducer,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
