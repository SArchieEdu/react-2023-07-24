import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectRestaurantIds} from "../selectors";

export const loadRestaurantsIfNotExist = createAsyncThunk(
  "restaurant/loadRestaurant",
  async () => {
    const response = await fetch("http://localhost:3001/api/restaurants");
    return response.json();
  },
  {
    condition: (_, {getState}) => {
      if (selectRestaurantIds(getState()).length) {
        return;
      }
    },
  }
);
