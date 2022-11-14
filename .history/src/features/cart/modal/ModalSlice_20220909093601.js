import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isDlete: false
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal : (state) => {
      state.isOpen = true;
    },
    closeModal : (state) => {
      state.isOpen = false;
    },
    openConfirmDelete : (state) => {
      state.isDlete = true;
    },
    closeConfirmDelete : (state) => {
      state.isDlete = true;
    },
  }
})

export const {openModal, closeModal} = modalSlice.actions;
export default modalSlice.reducer;
