import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantReviewsById } from "../../restaurants/selectors";
import { selectReviewIds } from "../selectors";

export const loadReviewsByRestaurantIfNotExist = createAsyncThunk(
  "review/loadReviewsByRestaurantIfNotExist",
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews/?restaurantId=${restaurantId}`
    );
    return await response.json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const reviewsIds = selectReviewIds(state);
      const restaurantReviews = selectRestaurantReviewsById(
        state,
        restaurantId
      );

      return (
        restaurantReviews &&
        restaurantReviews.some((reviewId) => !reviewsIds.includes(reviewId))
      );
    },
  }
);
