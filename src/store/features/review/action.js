export const REVIEW_ACTION = {
  startLoading: "review/startLoading",
  finishLoading: "review/finishLoading",
  failLoading: "review/failLoading",
  addNewReview: "review/addNewReview",
  failSaving: "review/failSaving",
};

export const startLoadingReviews = () => ({
  type: REVIEW_ACTION.startLoading,
});

export const finishLoadingReviews = (restaurants) => ({
  type: REVIEW_ACTION.finishLoading,
  payload: restaurants,
});

export const failLoadingReviews = () => ({
  type: REVIEW_ACTION.failLoading,
});

export const addReview = (review) => ({
  type: REVIEW_ACTION.addNewReview,
  payload: review,
});

export const failedAddNewReview = () => ({
  type: REVIEW_ACTION.failSaving,
});
