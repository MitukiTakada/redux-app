import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../CartItems";

const initialState = {
  cartItems: cartItems,
  total: 0,
  amount: 4,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    C
  }
});

export const {clearCart} = cartSlice.actions;
export default cartSlice.reducer;