import { createSelector } from '@reduxjs/toolkit';

export const getAllContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getLoading = state => state.contacts.isLoading;

export const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
