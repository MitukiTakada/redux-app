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
    clearCart : () => {
      return {cartItems: [], amount: 0, total: 0};
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find((item) => {
        return item.id === action.payload;
      })
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, action) => {
      if(state.amount)
      const cartItem = state.cartItems.find((item) => {
        return item.id === action.payload;
      })
      cartItem.amount = cartItem.amount - 1;
    }
  },
});

export const {clearCart, removeItem, increase, decrease} = cartSlice.actions;
export default cartSlice.reducer;