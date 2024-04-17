import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
