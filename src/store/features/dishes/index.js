import { normalizedDishes } from "../../../constants/normalized-fixtures";

const DEFAULT_STATE = {
  entities: normalizedDishes.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
  ids: normalizedDishes.map(({ id }) => id),
};

export const dishesReducer = (state = DEFAULT_STATE, { type } = {}) => {
  switch (type) {
    default:
      return state;
  }
};
