import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addNewContactRequest,
  addNewContactSuccess,
  addNewContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} from './contacts-action';

const addNew = (state, payload) => {
  const uniaqueName = state.find(
    contact => contact.name.toLowerCase() === payload.name.toLowerCase(),
  );
  if (payload.name === '') {
    alert('Вы забыли ввести имя контакта');
  } else if (payload.number === '') {
    alert('Вы забыли ввести номер контакта');
  } else if (uniaqueName) {
    alert(`${payload.name} уже есть в списке`);
  } else {
    return [...state, payload];
  }
};

const itemsReducer = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addNewContactSuccess]: (state, { payload }) => addNew(state, payload),
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addNewContactRequest]: () => true,
  [addNewContactSuccess]: () => false,
  [addNewContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
});
