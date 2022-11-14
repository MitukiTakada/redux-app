import { configureStore } from "@reduxjs/toolkit";
import cartR

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  }
})