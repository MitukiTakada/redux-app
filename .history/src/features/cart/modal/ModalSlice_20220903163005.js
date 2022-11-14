import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducer: {
    openModal : (state) => {
      state.isOpen = true;
    },
    closeModal : (state) => {
      state.isOpen = false;
    }
  }
})

export const {openModal, closeModal} = ModalSlice.actions;
export default ModalSlice.reducer;
