import axios from 'axios';

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
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

const addContact =
  ({ name, number }) =>
  async dispatch => {
    const contact = { name, number };

    dispatch(addContactRequest());

    try {
      const { data } = await axios.post('/contacts', contact);

      dispatch(addContactSuccess(data));
    } catch (error) {
      dispatch(addContactError(error));
    }
  };

const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);

    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

// eslint-disable-next-line
export default { fetchContacts, addContact, deleteContact };

// ! Второй вариатн, но идет дополнительный запрос на сервер
// const addContact =
//   ({ name, number }) =>
//   async dispatch => {
//     const contact = { name, number };

//     dispatch(fetchContactsRequest());
//     try {
//       const { data } = await axios.get(`/contacts?name=${name}`);
//       if (data[0]?.name === name) {
//         alert(`This ${name} is on the list Phonebook`);
//         dispatch(fetchContactsSuccess());
//         return;
//       }

//       dispatch(addContactRequest());

//       try {
//         const { data } = await axios.post('/contacts', contact);

//         dispatch(addContactSuccess(data));
//       } catch (error) {
//         dispatch(addContactError(error));
//       }
//     } catch (error) {
//       dispatch(fetchContactsError(error));
//     }
//     };
