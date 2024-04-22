import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: { isOpen: false, renderedComponent: null },
  reducers: {
    modalOpen(state, action) {
      state.isOpen = true;
      state.renderedComponent = action.payload;
    },
    modalClose(state) {
      state.isOpen = false;
      state.renderedComponent = null;
    },
  },
  selectors: {
    selectIsOpen: state => state.isOpen,
    selectRenderedComponent: state => state.renderedComponent,
  },
});

export const { modalOpen, modalClose } = modalSlice.actions;
export const { selectIsOpen, selectRenderedComponent } = modalSlice.selectors;
export const modalReducer = modalSlice.reducer;
