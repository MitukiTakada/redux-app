import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  id: null
}

const SelectedItemSlice = createSlice({
  name: "selectedItem",
  initialstate,
  reducers : {
    selectItem : (state, action) => {
      const activeItem = action.payload
      state.selectedItem = 
    }
  }
})

export const {selectItem} = SelectedItemSlice.actions;
export default SelectedItemSlice.reducer;