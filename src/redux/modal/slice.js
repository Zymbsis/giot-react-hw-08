import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register } from '../auth/operations';
import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from '../contacts/operations';

const initialState = {
  isOpen: false,
  dataModal: { modalType: null, modalId: null },
};

const handlerForOpenModal = state => {
  state.isOpen = true;
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    modalOpen(state, action) {
      state.isOpen = true;
      state.dataModal.modalType = action.payload.modalType;
      state.dataModal.modalId = action.payload.modalId;
    },
    modalClose(state) {
      state.isOpen = false;
      state.dataModal.modalType = null;
      state.dataModal.modalId = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(logout.fulfilled, state => {
        state.isOpen = false;
        state.dataModal.modalType = null;
      })
      .addCase(deleteContact.pending, state => {
        state.isOpen = false;
        state.dataModal.modalType = null;
        state.dataModal.modalId = null;
      })
      .addCase(updateContact.pending, state => {
        state.isOpen = false;
        state.dataModal.modalType = null;
        state.dataModal.modalId = null;
      })
      .addCase(login.rejected, handlerForOpenModal)
      .addCase(register.rejected, handlerForOpenModal)
      .addCase(logout.rejected, handlerForOpenModal)
      .addCase(fetchContacts.rejected, handlerForOpenModal)
      .addCase(addContact.rejected, handlerForOpenModal)
      .addCase(updateContact.rejected, handlerForOpenModal)
      .addCase(deleteContact.rejected, handlerForOpenModal);
  },
});

export const { modalOpen, modalClose } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
