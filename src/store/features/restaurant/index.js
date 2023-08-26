import {createSlice, createEntityAdapter} from "@reduxjs/toolkit";
import {loadRestaurantsIfNotExist} from "./thunks/load-restaurants";

const restaurantEntityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: restaurantEntityAdapter.getInitialState(),
  reducers: {
    addRestaurantReview: (state, {payload} = {}) => {
      restaurantEntityAdapter.addOne(state, payload);
    },
  },
  extraReducers: (builder) =>
    builder.addCase(
      loadRestaurantsIfNotExist.fulfilled,
      (state, {payload} = {}) => {
        restaurantEntityAdapter.setMany(state, payload);
      }
    ),
});

export const {addRestaurantReview} = restaurantSlice.actions;
