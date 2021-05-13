import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} from './contacts-actions';

const findId = (state, payload) => {
  return state.find(({ name }) => name === payload.name)
    ? alert(`This ${payload.name} is on the list Phonebook`)
    : [payload, ...state];
};

const filterId = (state, payload) => {
  return state.filter(({ id }) => id !== payload);
};

const items = createReducer([], {
  [fetchContactsSuccess]: (state, { payload }) => [...state, payload],
  [addContactSuccess]: (state, { payload }) => findId(state, payload),
  [deleteContactSuccess]: (state, { payload }) => filterId(state, payload),
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, loading, filter });
