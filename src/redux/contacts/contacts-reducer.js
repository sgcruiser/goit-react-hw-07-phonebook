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

const sortId = payload => payload.sort((a, b) => a.name.localeCompare(b.name));

const filterId = (state, payload) => state.filter(({ id }) => id !== payload);

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => sortId(payload),
  [addContactSuccess]: (state, { payload }) => [...state, payload],
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

const error = createReducer(false, {
  [fetchContactsRequest]: () => false,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => true,
  [addContactRequest]: () => false,
  [addContactSuccess]: () => false,
  [addContactError]: () => true,
  [deleteContactRequest]: () => false,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => true,
});

export default combineReducers({ items, loading, filter, error });
