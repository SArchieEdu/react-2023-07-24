import { createStore } from "../custome-redux";

const defaultState = {};

const rootReducer = (state = defaultState, action) => {
  switch (action?.type) {
    case "increment":
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) + 1
      };

    case "decrement":
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) - 1
      };

    case "setAuthName": {
      return {
        ...state,
        username: action.payload
      };
    }

    default:
      return state;
  }
};

export const store = createStore(rootReducer);
