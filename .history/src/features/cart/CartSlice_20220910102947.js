import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../Items/CartItems";

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
      
      const cartItem = state.cartItems.find((item) => {
        return item.id === action.payload;
      })
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotal : (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
    addList : () => {
      const
    }
  },
});

export const {clearCart, removeItem, increase, decrease, calculateTotal} = cartSlice.actions;
export default cartSlice.reducer;