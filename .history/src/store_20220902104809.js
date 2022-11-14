import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cart/Cart"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  }
})