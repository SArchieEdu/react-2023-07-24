import { createStore } from "../custome-redux";

const defaultState = {
  user: {},
  dishes: {}
};

const rootReducer = (state = defaultState, action) => {  
  switch (action?.type) {
    case "increment": {
      const dishes = { ...state.dishes };
      dishes[action.payload] = (dishes[action.payload] || 0) + 1;
 
      return {
        ...state,
        dishes,
      };
    }
    case "decrement": {
      const dishes = { ...state.dishes };
      dishes[action.payload] = (dishes[action.payload] || 0) - 1;
 
      return {
        ...state,
        dishes,
      };
    }
    case "setUser": {
      return {
        ...state,
        'user': action.payload,
      };
    }
    default:
      return state;
  }
};

export const store = createStore(rootReducer);
