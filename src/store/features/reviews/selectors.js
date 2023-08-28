import { LOADING_STATUS } from "../../../constants/loading-statuses";

export const selectReviewsModule = (state) => state.reviews;

export const selectReviewById = (state, id) => selectReviewsModule(state).entities[id];

export const selectReviewIds = (state) => selectReviewsModule(state).ids;

export const selectReviewsLoadingStatus = (state) => selectReviewsModule(state).status;

export const selectIsReviewsLoading = (state) =>
  selectReviewsLoadingStatus(state) === LOADING_STATUS.loading;

export const selectIsReviewsLoadingFinished = (state) =>
  selectReviewsLoadingStatus(state) === LOADING_STATUS.finished;
