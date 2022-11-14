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
      let cartList = AllItems;
      const choosenItem = state.Allitems.find((item) => {
        returnitem.id === action.payload
      })
      console.log(choosenItem);
      cartList = [...cartList, choosenItem];
    }
  }
})
export const {addList} = SliceSlice.actions;
export default SliceSlice.reducer;