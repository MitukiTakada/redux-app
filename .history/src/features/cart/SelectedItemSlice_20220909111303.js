import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  selectedItem: 0
}

const SelectedItemSlice = createSlice({
  name: "item",
  initialstate,
  reducers : {
    selectItem : (state, action) => {
      const activeItem = action.payload
      state.selectedItem = activeItem
    },
    default: return state
  }
})

export const {selectItem} = SelectedItemSlice.actions;
export default SelectedItemSlice.reducer;