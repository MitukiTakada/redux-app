import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,

}

const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducer: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal = (state,action) => {
      state.isOpen = false;
    }
  }
})

export const {}