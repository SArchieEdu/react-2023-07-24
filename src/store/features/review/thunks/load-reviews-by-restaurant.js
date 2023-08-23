import {
  startLoadingReviews,
  finishLoadingReviews,
  failLoadingReviews,
} from "../action";

let currentRestaurantId;
let currentLength;

export const loadReviewsByRestaurantIfNotExist =
  (restaurantId) => (dispatch, getState) => {
    const state = getState();
    if (
      state.review.ids.length > 0 &&
      state.review.ids.length === currentLength &&
      currentRestaurantId === restaurantId
    ) {
      return;
    }
    currentRestaurantId = restaurantId;
    currentLength = state.review.ids.length;
    dispatch(startLoadingReviews());

    fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`)
      .then((response) => response.json())
      .then((reviews) => dispatch(finishLoadingReviews(reviews)))
      .catch(() => dispatch(failLoadingReviews));
  };
