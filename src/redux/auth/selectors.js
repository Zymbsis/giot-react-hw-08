export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
export const selectUserToken = state => state.auth.user.token;
export const selectIsUserLoggedIn = state => state.auth.user.isLoggedIn;
export const selectIsUserRefreshing = state => state.auth.user.isRefreshing;
export const selectLoading = state => state.auth.user.loading;
export const selectError = state => state.auth.user.error;
