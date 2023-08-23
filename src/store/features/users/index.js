import { normalizedUsers } from "../../../constants/normalized-fixtures";

const DEFAULT_STATE = {
  entities: normalizedUsers.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
  ids: normalizedUsers.map(({ id }) => id),
};

export const usersReducer = (state = DEFAULT_STATE, { type } = {}) => {
  switch (type) {
    default:
      return state;
  }
};
