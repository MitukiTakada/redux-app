import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/CartSlice"
import {modalReducer}

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  }
})