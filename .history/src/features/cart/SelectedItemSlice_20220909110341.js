import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  id: null
}

const SelectedItemSlice = createSlice({
  name: "selectedItem",
  initialstate,
  reducers : {
    selectItem : (state, action) => {
      state.selectedItem = action.payload
    }
  }
})

export const {selectItem} = SelectedItemSlice.actions;
export default SelectedItemSlice.reducer;