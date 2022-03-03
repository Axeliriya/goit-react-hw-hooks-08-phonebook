import apiService from '../../service/service-api';
import { toast } from 'react-toastify';
import { contactsSlice } from '.';

const fetchContacts = () => async dispatch => {
  dispatch(contactsSlice.actions.fetchContactsRequest());

  try {
    const { data } = await apiService.getFetchContacts();
    dispatch(contactsSlice.actions.fetchContactsSuccess(data));
  } catch (error) {
    toast.error(error.message);
    dispatch(contactsSlice.actions.fetchContactsError(error.message));
  }
};

const addContact = contact => async dispatch => {
  dispatch(contactsSlice.actions.addContactRequest());

  try {
    const { data } = await apiService.addContact(contact);
    dispatch(contactsSlice.actions.addContactSuccess(data));
  } catch (error) {
    toast.error(error.message);
    dispatch(contactsSlice.actions.addContactError(error.message));
  }
};

const deleteContact = contactId => async dispatch => {
  dispatch(contactsSlice.actions.deleteContactRequest());

  try {
    await apiService.deleteContact(contactId);
    dispatch(contactsSlice.actions.deleteContactSuccess(contactId));
  } catch (error) {
    toast.error(error.message);
    dispatch(contactsSlice.actions.deleteContactError(error.message));
  }
};

// eslint-disable-next-line
export default { fetchContacts, addContact, deleteContact };
