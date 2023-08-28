export const REVIEWS_ACTION = {
  load: "reviews/load",
  startLoading: "reviews/startLoading",
  finishLoading: "reviews/finishLoading",
  failLoading: "reviews/failLoading",
  addReview: "reviews/add",
};

export const loadReviews = () => ({
  type: REVIEWS_ACTION.load,
});

export const startLoadingReviews = () => ({
  type: REVIEWS_ACTION.startLoading,
});

export const finishLoadingReviews = (reviews) => ({
  type: REVIEWS_ACTION.finishLoading,
  payload: reviews,
});

export const failLoadingReviews = () => ({
  type: REVIEWS_ACTION.failLoading,
});

export const addReview = (review) => ({
  type: REVIEWS_ACTION.addReview,
  payload: review,
});
