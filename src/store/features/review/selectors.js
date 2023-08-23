import { LOADING_STATUS } from "../../../constants/loading-statuses.js";

export const selectReviewModule = (state) => state.review;

export const selectReviewById = (state, id) =>
  selectReviewModule(state).entities[id];

export const selectReviewIds = (state) => selectReviewModule(state).ids;

export const selectReviewsLoadingStatus = (state) =>
  selectReviewModule(state).status;

export const selectIsReviewsLoading = (state) =>
  selectReviewsLoadingStatus(state) === LOADING_STATUS.loading;

export const selectIsReviewsLoadingFailed = (state) =>
  selectReviewsLoadingStatus(state) === LOADING_STATUS.failed;
