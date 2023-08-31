import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantMenuById } from "../../restaurant/selectors";
import { selectDishIds } from "../selectors";

export const loadDishesByRestaurantIfNotExist = createAsyncThunk(
  "dish/loadDishesByRestaurantIfNotExist",
  async (restaurantId, thunkAPI) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`,
      {
        signal: thunkAPI.signal,
      },
    );

    return await response.json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantMenu = selectRestaurantMenuById(state, restaurantId);
      const dishIds = selectDishIds(state);

      return !(
        !restaurantMenu ||
        restaurantMenu.every((dishId) => dishIds.includes(dishId))
      );
    },
  },
);
