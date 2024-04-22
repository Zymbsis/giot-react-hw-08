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

const handlePending = (state, action) => {
  state.loading = true;
  state.error = null;
  if (action.type === 'auth/refresh/pending') {
    state.isRefreshing = true;
  }
};
const handleRejected = (state, action) => {
  state.loading = false;
  state.error = true;
  if (action.type === 'auth/refresh/rejected') {
    state.isRefreshing = false;
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(login.pending, handlePending)
      .addCase(refreshUser.pending, handlePending)
      .addCase(logout.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.isLoggedIn = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.isLoggedIn = false;
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
      .addCase(logout.rejected, handleRejected)
      .addCase(refreshUser.rejected, handleRejected);
  },
  selectors: {
    selectUserName: state => state.user.name,
    selectUserEmail: state => state.user.email,
    selectUserToken: state => state.token,
    selectIsUserLoggedIn: state => state.isLoggedIn,
    selectIsUserRefreshing: state => state.isRefreshing,
    selectAuthLoading: state => state.loading,
    selectAuthError: state => state.error,
  },
});
export const {
  selectUserName,
  selectUserEmail,
  selectUserToken,
  selectIsUserLoggedIn,
  selectIsUserRefreshing,
  selectAuthLoading,
  selectAuthError,
} = authSlice.selectors;

export const authReducer = authSlice.reducer;
