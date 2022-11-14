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
    clreaCart: (state) => {
      state.cartItems = [];
    }
  },
});

export const {clreaCart} = cart
export default cartSlice.reducer;