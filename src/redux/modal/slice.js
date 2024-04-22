import { createSlice } from '@reduxjs/toolkit';
import { logout } from '../auth/operations';
import { deleteContact } from '../contacts/operations';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    dataModal: { actionType: null, actionData: null },
  },
  reducers: {
    modalOpen(state, action) {
      state.isOpen = true;
      state.dataModal.actionType = action.payload.actionType;
      state.dataModal.actionData = action.payload.actionData;
    },
    modalClose(state, action) {
      state.isOpen = false;
      state.dataModal.actionType = null;
      state.dataModal.actionData = null;
      console.log(action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(logout.fulfilled, state => {
        state.isOpen = false;
        state.dataModal.actionType = null;
        state.dataModal.actionData = null;
      })
      .addCase(deleteContact.fulfilled, state => {
        state.isOpen = false;
        state.dataModal.actionType = null;
        state.dataModal.actionData = null;
      });
  },
  selectors: {
    selectIsOpen: state => state.isOpen,
    selectActionType: state => state.dataModal.actionType,
    selectActionData: state => state.dataModal.actionData,
  },
});

export const { modalOpen, modalClose } = modalSlice.actions;
export const { selectIsOpen, selectActionType, selectActionData } =
  modalSlice.selectors;
export const modalReducer = modalSlice.reducer;
