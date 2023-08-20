import {normalizedReviews} from "../../../constants/normalized-fixtures";

const DEFAULT_STATE = {
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;
    return acc;
  }, {}),
  ids: normalizedReviews.map((review) => review.id),
};

export const reviewReducer = (state = DEFAULT_STATE, {type} = {}) => {
  switch (type) {
    default:
      return state;
  }
};
