import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { createReview } from "./thunks.js/create-review";
import { loadReviewsByRestaurantIfNotExist } from "./thunks.js/load-reviews-by-restaurant";

const reviewEntityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: "review",
  initialState: reviewEntityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
      .addCase(createReview.fulfilled, (state, { payload } = {}) => {
        reviewEntityAdapter.addOne(state, payload);
      })
      .addCase(
        loadReviewsByRestaurantIfNotExist.fulfilled,
        (state, { payload }) => {
          reviewEntityAdapter.setMany(state, payload);
        }
      ),
});
