import {
  failLoadingReviews,
  finishLoadingReviews,
  startLoadingReviews,
} from "../action";

export const loadReviewsByRestaurantIfNotExist =
  (restaurantId) => (dispatch, getState) => {
    dispatch(startLoadingReviews());

    fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`)
      .then((response) => response.json())
      .then((reviews) => dispatch(finishLoadingReviews(reviews)))
      .catch(() => dispatch(failLoadingReviews()));
  };
