import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUserToken } from '../auth/slice';

const contactsAxios = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setAuthHeader = thunkAPI => {
  contactsAxios.defaults.headers.common['Authorization'] = `Bearer ${
    thunkAPI.getState().auth.token
  }`;
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      setAuthHeader(thunkAPI);
      const { data } = await contactsAxios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('fetch error');
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      setAuthHeader(thunkAPI);
      const { data } = await contactsAxios.post('/contacts', { name, number });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('add error');
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      setAuthHeader(thunkAPI);
      const { data } = await contactsAxios.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('delete error');
    }
  }
);

// export const updateContact = createAsyncThunk(
//   'contacts/updateContact',
//   async (contactId, thunkAPI) => {
//     try {
//       const { data } = await axiosInstance.patch(`/contacts/${contactId}`);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue('update error');
//     }
//   }
// );
