import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: { isOpen: false },
  reducers: {
    modalOpen(state) {
      state.isOpen = true;
    },
    modalClose(state) {
      state.isOpen = false;
    },
  },
  selectors: { selectIsOpen: state => state.isOpen },
});

export const { modalOpen, modalClose } = modalSlice.actions;
export const { selectIsOpen } = modalSlice.selectors;
export const modalReducer = modalSlice.reducer;
