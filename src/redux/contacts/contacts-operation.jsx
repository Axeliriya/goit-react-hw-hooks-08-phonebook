import apiService from '../../service/service-api';
import { toast } from 'react-toastify';
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
} from '../contacts';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await apiService.getFetchContacts();
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    toast.error(error.message);
    dispatch(fetchContactsError(error.message));
  }
};

export const addContact = contact => async dispatch => {
  dispatch(addContactRequest());

  try {
    const { data } = await apiService.addContact(contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    toast.error(error.message);
    dispatch(addContactError(error.message));
  }
};

export const deleteContact = contactId => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await apiService.deleteContact(contactId);
    dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    toast.error(error.message);
    dispatch(deleteContactError(error.message));
  }
};
