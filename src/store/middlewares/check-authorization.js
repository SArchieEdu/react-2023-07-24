import { authorizationSlice } from "../features/authorization";
import { selectStartSessionTime } from "../features/authorization/selectors";
// import { CART_ACTION } from "../features/cart/action";

// const AUTHORIZATION_ACTIONS = [CART_ACTION.increment, CART_ACTION.decrement];
const AUTHORIZATION_ACTIONS = [];
const SESSION_LIFE_TIME = 10 * 60 * 1000;

export const checkAuthorization = (store) => (next) => (action) => {
  if (!AUTHORIZATION_ACTIONS.includes(action.type)) {
    return next(action);
  }

  const startSessionTime = selectStartSessionTime(store.getState());

  if (startSessionTime && Date.now() - startSessionTime < SESSION_LIFE_TIME) {
    return next(action);
  }

  store.dispatch(authorizationSlice.actions.logout());
};
