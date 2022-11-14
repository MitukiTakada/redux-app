import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItem: 0
}

const ItemSlice = createSlice({
  name: "item",
  initialState,
  reducers : {
    selectItem : (state, action) => {
      const activeItem = action.payload
      state.selectedItem = activeItem
    },
  }
})

export const {selectItem} = ItemSlice.actions;
export default ItemSlice.reducer;