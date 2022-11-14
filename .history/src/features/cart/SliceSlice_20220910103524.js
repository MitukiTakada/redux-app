import { createSlice } from "@reduxjs/toolkit";
import AllItems from "../../Items/AllItems";

const initialState ={
  Allitems: AllItems
}

const SliceSlice = createSlice({
  name: "slice",
  initialState,
  reducers : {
    addList : (state, action) => {
      const cartList = cartItems;
      const choosenItem = state.Allitems.find((item))
      cartList.push()
    }
  }
})