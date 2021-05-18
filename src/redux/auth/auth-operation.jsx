import axios from 'axios';
import apiService from '../../service/service-api';
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
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

export const logIn = credentials => async dispatch => {
  dispatch(loginRequest());

  try {
    const { data } = await apiService.logInUser(credentials);

    token.set(data.token);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const logOut = () => async dispatch => {
  dispatch(logoutRequest());

  try {
    await apiService.logOutUser();

    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
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
    dispatch(getCurrentUserError(error.message));
  }
};