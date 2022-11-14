import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  selectedItem: "",
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

export const {}
export default SelectedItemSlice.reducer