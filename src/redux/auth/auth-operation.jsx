import axios from 'axios';
import apiService from '../../service/service-api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from '../auth';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = credentials => async dispatch => {
  dispatch(registerRequest());

  try {
    const { data } = await apiService.registerUser(credentials);
    token.set(data.token);
    toast.success('Success');
    dispatch(registerSuccess(data));
  } catch (error) {
    toast.error(error.message);
    dispatch(registerError(error.message));
  }
};

export const logIn = credentials => async dispatch => {
  dispatch(loginRequest());

  try {
    const { data } = await apiService.logInUser(credentials);

    token.set(data.token);
    toast.success('Success');
    dispatch(loginSuccess(data));
  } catch (error) {
    toast.error(error.message);
    dispatch(loginError(error.message));
  }
};

export const logOut = () => async dispatch => {
  dispatch(logoutRequest());

  try {
    await apiService.logOutUser();

    token.unset();
    toast.success('Success');
    dispatch(logoutSuccess());
  } catch (error) {
    toast.error(error.message);
    dispatch(logoutError(error.message));
  }
};

export const currentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(getCurrentUserRequest());

  try {
    const { data } = await apiService.getCurrentUser();

    dispatch(getCurrentUserSuccess(data));
  } catch (error) {
    toast.error(error.message);
    dispatch(getCurrentUserError(error.message));
  }
};
