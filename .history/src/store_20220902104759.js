import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./fe"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  }
})