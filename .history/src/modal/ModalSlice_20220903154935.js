import { createSlice } from "@reduxjs/toolkit";
import Modal from "../components/Modal";

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

export const {openModal, closeModal} = ModalSlice.actions;
export default Modal.reducer