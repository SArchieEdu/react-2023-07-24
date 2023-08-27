import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {loadRestaurantsIfNotExist} from "./thunks/load-restaurants";


const restaurantsEntityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: restaurantsEntityAdapter.getInitialState(),
  reducers: {
    addRestaurantReview: (state, {payload} = {}) => {
    // вот тут не понял как обновить данные по отзывам,
    // или например вызвать thunk для обновления данных по ресторанам
    },
  },
  extraReducers: (builder) =>
      builder
          .addCase(
              loadRestaurantsIfNotExist.fulfilled,
              (state, { payload } = {}) => {
                restaurantsEntityAdapter.setMany(state, payload);
              }
          ),
})

export const {addRestaurantReview} = restaurantsSlice.actions;
