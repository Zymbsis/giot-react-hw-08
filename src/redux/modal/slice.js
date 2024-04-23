import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register } from '../auth/operations';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from '../contacts/operations';

const initialState = {
  isOpen: false,
  dataModal: { actionType: null, actionData: null },
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
      state.dataModal.actionType = action.payload.actionType;
      state.dataModal.actionData = action.payload.actionData;
    },
    modalClose(state) {
      state.isOpen = false;
      state.dataModal.actionType = null;
      state.dataModal.actionData = null;
    },
    changeContacts(state, action) {
      state.dataModal.actionData.name = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(logout.fulfilled, state => {
        state.isOpen = false;
        state.dataModal.actionType = null;
        state.dataModal.actionData = null;
      })
      .addCase(deleteContact.pending, state => {
        state.isOpen = false;
        state.dataModal.actionType = null;
        state.dataModal.actionData = null;
      })
      .addCase(login.rejected, handlerForOpenModal)
      .addCase(register.rejected, handlerForOpenModal)
      .addCase(logout.rejected, handlerForOpenModal)
      .addCase(fetchContacts.rejected, handlerForOpenModal)
      .addCase(addContact.rejected, handlerForOpenModal)
      .addCase(deleteContact.rejected, handlerForOpenModal);
  },
  selectors: {
    selectIsOpen: state => state.isOpen,
    selectActionType: state => state.dataModal.actionType,
    selectActionData: state => state.dataModal.actionData,
  },
});

export const { modalOpen, modalClose, changeContacts } = modalSlice.actions;
export const { selectIsOpen, selectActionType, selectActionData } =
  modalSlice.selectors;
export const modalReducer = modalSlice.reducer;
