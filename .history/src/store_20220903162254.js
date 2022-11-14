import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/CartSlice";
import ModalSlice from "./features/cart/modal/ModalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: ModalSlice
  }
})