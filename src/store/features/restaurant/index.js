import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { createReview } from "../review/thunks/create-review";

import { loadRestaurantsIfNotExist } from "./thunks/load-restaurants";

const restaurantEntityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: restaurantEntityAdapter.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(
      loadRestaurantsIfNotExist.fulfilled,
      (state, { payload }) => {
        restaurantEntityAdapter.setMany(state, payload);
      },
    );
    builder.addCase(
      createReview.fulfilled,
      (state, { payload, meta: { arg } } = {}) => {
        const restaurantId = arg?.restaurantId;

        state?.entities[restaurantId]?.reviews?.push(payload.id);
      },
    );
  },
});
