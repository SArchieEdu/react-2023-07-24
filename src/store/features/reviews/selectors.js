export const selectReviewsModule = (state) => state.reviews;

export const selectReviewsById = (state, id) => selectReviewsModule(state).entities[id];
