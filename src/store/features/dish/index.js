import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {loadDishByRestaurantIfNotExist} from "./thunks/load-dishes-by-restaurant";


const dishEntityAdapter = createEntityAdapter();


export const dishSlice = createSlice({
  name: "restaurants",
  initialState: dishEntityAdapter.getInitialState(),
  extraReducers: (builder) =>
      builder
          .addCase(
              loadDishByRestaurantIfNotExist.fulfilled,
              (state, { payload } = {}) => {
                dishEntityAdapter.setMany(state, payload);
              }
          ),
})
