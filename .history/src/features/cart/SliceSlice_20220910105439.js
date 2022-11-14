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
      console.log("aaaa");
      let cartList = AllItems;
      const choosenItem = state.Allitems.find((item) => {
        item.id = action.payload
      })
      cartList = [...cartList, choosenItem];
    }
  }
})
export const {addList} = SliceSlice.actions;
export default SliceSlice.reducer;