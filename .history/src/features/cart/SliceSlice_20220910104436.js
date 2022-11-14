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
      const cartList = AllItems;
      const choosenItem = state.Allitems.find((item) => {
        item.id = action.payload
      })
      const newCartList = [...cartList, choo]
    }
  }
})
export const {addList} = SliceSlice.actions;
export default SliceSlice.reducer;