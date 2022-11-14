import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/CartSlice";
import modalSlice from "./features/cart/modal/ModalSlice";
import SelectedItemSlice from "./features/cart/SelectedItemSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalSlice,
  }
})