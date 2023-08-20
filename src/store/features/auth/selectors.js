export const selectAuthModule = (state) => state.auth;

export const selectCurrentUser = (state) =>
  selectAuthModule(state).user;
