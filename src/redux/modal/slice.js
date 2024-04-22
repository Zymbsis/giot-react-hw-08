import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: { isOpen: false, actionType: null },
  reducers: {
    modalOpen(state, action) {
      state.isOpen = true;
      state.actionType = action.payload;
    },
    modalClose(state) {
      state.isOpen = false;
      state.actionType = null;
    },
  },
  selectors: {
    selectIsOpen: state => state.isOpen,
    selectRenderedComponent: state => state.actionType,
  },
});

export const { modalOpen, modalClose } = modalSlice.actions;
export const { selectIsOpen, selectRenderedComponent } = modalSlice.selectors;
export const modalReducer = modalSlice.reducer;
