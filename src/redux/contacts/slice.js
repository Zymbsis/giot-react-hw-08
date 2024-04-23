import { createSelector, createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';
import { selectNameFilter } from '../filters/slice';
import { logout } from '../auth/operations';
import { modalClose, selectModalId } from '../modal/slice';

const initialState = { items: [], loading: false, error: null };

const handlePending = state => {
  state.loading = true;
  state.error = null;
};

const handleRejected = state => {
  state.loading = false;
  state.error = true;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContact.pending, handlePending)
      .addCase(updateContact.pending, handlePending)
      .addCase(deleteContact.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.rejected, handleRejected)
      .addCase(updateContact.rejected, handleRejected)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.map(contact =>
          contact.id === action.payload.id ? action.payload : contact
        );
      })
      .addCase(logout.fulfilled, state => {
        state.items = [];
      })
      .addCase(modalClose, state => {
        state.error = null;
      });
  },
  selectors: {
    selectContacts: state => state.items,
    selectLoading: state => state.loading,
    selectError: state => state.error,
  },
});

export const { selectContacts, selectLoading, selectError } =
  contactsSlice.selectors;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterName) =>
    contacts
      .filter(
        contact =>
          contact.name.toLowerCase().includes(filterName.toLowerCase()) ||
          contact.number.includes(filterName)
      )
      .toSorted((a, b) => a.name.localeCompare(b.name))
);

export const selectContact = createSelector(
  [selectContacts, selectModalId],
  (contacts, id) => contacts.filter(contact => contact.id === id)[0]
);
export const contactsReducer = contactsSlice.reducer;
