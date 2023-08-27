export const selectReviewModule = (state) => state.review;

export const selectReviewById = (state, id) =>
selectReviewModule(state).entities[id];

export const selectDishIds = (state) => selectReviewModule(state).ids;


