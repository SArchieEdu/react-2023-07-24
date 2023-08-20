import { authActions } from "../features/auth/index.js";

export const authMiddleware = (store) => (next) => (action) => {
  const now = new Date();
  const state = store.getState();

  const user = state.auth.user;
  const exp = state.auth.exp;
  const authExpired = user && exp && new Date(exp) <= now;

  if (authExpired && action.type !== authActions.logout) {
    console.log('Session expired');
    store.dispatch({type: authActions.logout});
  }

  next(action);
};
