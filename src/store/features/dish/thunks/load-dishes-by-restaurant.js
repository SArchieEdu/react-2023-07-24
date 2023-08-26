import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectRestaurantMenuById} from "../../restaurant/selectors";
import {selectDishIds} from "../selectors";

export const loadDishesByRestaurantIfNotExist = createAsyncThunk(
  "dish/loadDish",
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );
    console.log("first");
    return await response.json();
  },
  {
    condition: (restaurantId, {getState}) => {
      const state = getState();
      const restaurantMenu = selectRestaurantMenuById(state, restaurantId);
      const dishIds = selectDishIds(state);
      return (
        restaurantMenu ||
        !restaurantMenu.every((dishId) => dishIds.includes(dishId))
      );
    },
  }
);
