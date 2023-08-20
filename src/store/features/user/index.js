import { normalizedUsers } from "../../../constants/normalized-fixtures";

const DEFAULT_STATE = {
  entities: normalizedUsers.reduce((acc, review) => {
    acc[review.id] = review;

    return acc;
  }, {}),
  ids: normalizedUsers.map(({ id }) => id),
};

export const userReducer = (state = DEFAULT_STATE, { type } = {}) => {
  switch (type) {
    default:
      return state;
  }
};
