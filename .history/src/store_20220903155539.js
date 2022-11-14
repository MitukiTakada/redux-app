import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/CartSlice";
import ModalSlice, {modalReducer} from "./modal/ModalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: ModalSlice
  }
})