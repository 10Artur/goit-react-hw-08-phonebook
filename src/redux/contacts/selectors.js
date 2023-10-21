import { createSelector } from '@reduxjs/toolkit';

export const selectLoading = state => state.contacts.isLoading;

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        console.log('Calculating visible tasks');
        return contacts.filter(({ name }) =>
            name.toLowerCase().trim().includes(filter.toLowerCase())
        );
    }
);