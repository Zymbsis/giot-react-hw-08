import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';
import { selectModalId } from '../modal/selectors';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

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
