import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from "../selectors";

export const loadRestaurantsIfNotExist = createAsyncThunk(
  "restaurants/loadRestaurantsIfNotExist",
  async (_, thunkAPI) => {
    const response = await fetch("http://localhost:3001/api/restaurants/", {
      signal: thunkAPI.signal,
    });

    return await response.json();
  },
  {
    condition: (_, { getState }) => {
      return !selectRestaurantIds(getState()).length;
    },
  },
);
