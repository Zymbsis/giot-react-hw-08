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
      const { data } = await axios.post('/users/signup', credentials);
      console.log(data);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('register error');
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      console.log(data);
      setAuthHeader(data.token);
      return data;
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
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.get('/users/current');
      console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
