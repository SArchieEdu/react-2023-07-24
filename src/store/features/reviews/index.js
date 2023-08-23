import { normalizedReviews } from "../../../constants/normalized-fixtures";

const DEFAULT_STATE = {
  entities: normalizedReviews.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
  ids: normalizedReviews.map(({ id }) => id),
};

export const reviewsReducer = (state = DEFAULT_STATE, { type } = {}) => {
  switch (type) {
    default:
      return state;
  }
};
