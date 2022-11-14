import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  selectedItem: 1
}

const SelectedItemSlice = createSlice({
  name: "selectedItem",
  initialstate,
  reducers : {
    selectItem : (state, action) => {
      const activeItem = action.payload
      state.selectedItem = activeItem
    }
  }
})

export const {selectItem} = SelectedItemSlice.actions;
export default SelectedItemSlice.reducer;