import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/CartSlice";
import ItemSlice from "./features/cart/ItemSlice";
import modalSlice from "./features/cart/modal/ModalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalSlice,
    item: ItemSlice,
    slice: sli
  }
})