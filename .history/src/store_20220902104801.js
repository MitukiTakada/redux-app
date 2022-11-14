import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./features/"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  }
})