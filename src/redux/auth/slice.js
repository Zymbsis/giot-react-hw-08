import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './operations';

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

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(refreshUser.pending, state => {
        state.loading = true;
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(logout.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logout.fulfilled, state => {
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(login.rejected, handleRejected)
      .addCase(refreshUser.rejected, state => {
        handleRejected, (state.isRefreshing = false);
      })
      .addCase(logout.rejected, handleRejected);
  },
  selectors: {
    selectUserName: state => state.user.name,
    selectUserEmail: state => state.user.email,
    selectUserToken: state => state.token,
    selectIsUserLoggedIn: state => state.isLoggedIn,
    selectIsUserRefreshing: state => state.isRefreshing,
    selectLoading: state => state.loading,
    selectError: state => state.error,
  },
});

export const {
  selectUserName,
  selectUserEmail,
  selectUserToken,
  selectIsUserLoggedIn,
  selectIsUserRefreshing,
  selectLoading,
  selectError,
} = authSlice.selectors;

export const authReducer = authSlice.reducer;
