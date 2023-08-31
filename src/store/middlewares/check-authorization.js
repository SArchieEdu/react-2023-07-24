import { logout } from "../features/authorization";
import { selectStartSessionTime } from "../features/authorization/selectors";
import { increment, decrement } from "../features/cart";

const AUTHORIZED_ACTIONS = [increment().type, decrement().type];
const SESSION_LIFE_TIME = 10 * 60 * 1000;

export const checkAuthorization =
  (store) =>
  (next) =>
  (action = {}) => {
    if (!AUTHORIZED_ACTIONS.includes(action.type)) {
      return next(action);
    }

    const startSessionTime = selectStartSessionTime(store.getState());

    if (startSessionTime && Date.now() - startSessionTime < SESSION_LIFE_TIME) {
      return next(action);
    }

    store.dispatch(logout());
  };
