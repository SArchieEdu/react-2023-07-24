import { selectDishIds } from "../selectors";
import { selectRestaurantMenuById } from "../../restaurants/selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadDishesByRestaurantIfNotExist = createAsyncThunk(
  "dish/loadDishesByRestaurantIfNotExist",
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes/?restaurantId=${restaurantId}`
    );

    return response.json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const dishIds = selectDishIds(state);
      const restaurantMenu = selectRestaurantMenuById(state, restaurantId);

      return (
        restaurantMenu &&
        restaurantMenu.some((dishId) => !dishIds.includes(dishId))
      );
    },
  }
);
