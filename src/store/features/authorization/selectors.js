export const selectAutorizationModule = (state) => state.authorization;

export const selectCurrentUser = (state) =>
  selectAutorizationModule(state).currentUser;

export const selectStartSessionTime = (state) =>
  selectAutorizationModule(state).StartSessionTime;
