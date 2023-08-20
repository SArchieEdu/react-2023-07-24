import { createStore } from "../custome-redux";

const defaultState = {};

const rootReducer = (state = defaultState, action) => {
  switch (action?.type) {
    case "increment":
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) + 1,
      };
    case "decrement":
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) - 1,
      };
    case "login":
      return {
        ...state,
        [action.payload]: state[action.payload] = true,
      };
    case "logout":
      return {
        ...state,
        [action.payload]: state[action.payload] = false,
      };

    default:
      return state;
  }
};

export const store = createStore(rootReducer);
