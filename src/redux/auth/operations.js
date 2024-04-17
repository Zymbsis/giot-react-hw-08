import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
  headers: { Authorization: '' }, //
});

export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post('/users/signup', {
        name,
        email,
        password,
      });
      console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('register error');
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post('/users/login', {
        email,
        password,
      });
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('login error');
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const { data } = await axiosInstance.post(`/users/logout`); //
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue('logout error');
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get(`/users/current`); //
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('refresh error');
    }
  }
);
