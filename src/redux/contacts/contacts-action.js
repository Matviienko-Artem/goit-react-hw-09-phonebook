import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');

export const addNewContactRequest = createAction(
  'contacts/addNewContactRequest',
);
export const addNewContactSuccess = createAction(
  'contacts/addNewContactSuccess',
);
export const addNewContactError = createAction('contacts/addNewContactError');

export const changeFilter = createAction('contacts/ChangeFilter');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');
