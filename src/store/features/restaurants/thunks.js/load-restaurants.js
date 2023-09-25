import { selectRestaurantIds } from "../selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadRestaurantsIfNotExist = createAsyncThunk(
  "restaurants/loadRestaurantsIfNotExist",
  async () => {
    const response = await fetch("http://localhost:3001/api/restaurants/");

    return response.json();
  },
  {
    conditions: (_, { getState }) => !selectRestaurantIds(getState())?.length,
  }
);
