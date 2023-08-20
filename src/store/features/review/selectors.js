export const selectRestaurantModule = (state) => state.review;

export const selectReviewById = (state, id) =>
  selectRestaurantModule(state).entities[id];


export const selectReviewIds = (state) => selectRestaurantModule(state).ids;
