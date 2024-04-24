import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const authAxios = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setAuthHeader = (token = null) => {
  if (token) {
    authAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete authAxios.defaults.headers.common['Authorization'];
  }
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await authAxios.post('/users/signup', credentials);
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
      const { data } = await authAxios.post('/users/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('login error');
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const res = await authAxios.post(`/users/logout`);
    setAuthHeader();
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('logout error');
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const userToken = thunkAPI.getState().auth.token;
    if (userToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(userToken);
      const { data } = await authAxios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('refresh error');
    }
  }
);
