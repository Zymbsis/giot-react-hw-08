import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUserToken } from './selectors';

// const baseURL = 'https://connections-api.herokuapp.com';

// const setAuthHeader = (instance, token) => {
//   instance.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = instance => {
//   delete instance.defaults.headers.common.Authorization;
// };
// const axiosInstance = axios.create({
//   baseURL: baseURL,
// });

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      clearAuthHeader();
      const res = await axios.post('/users/signup', credentials);
      console.log(res);
      // setAuthHeader(res.data.token);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue('register error');
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axiosInstance.post('/users/login', credentials);
      console.log(res.data);
      setAuthHeader(axiosInstance, res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('login error');
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const res = await axiosInstance.post(`/users/logout`); //
    clearAuthHeader(axiosInstance);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('logout error');
  }
});

// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axiosInstance.get(`/users/current`); //
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue('refresh error');
//     }
//   }
// );
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      const axiosInstanceAuth = axios.create({
        baseURL: baseURL,
      });
      setAuthHeader(axiosInstanceAuth, persistedToken);
      const res = await axiosInstanceAuth.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
