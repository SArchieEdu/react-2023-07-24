import {selectRestaurantMenuById} from "../../restaurant/selectors";
import {
  failLoadingDishes,
  finishLoadingDishes,
  startLoadingDishes,
} from "../action";
import { selectDishIds } from "../selectors";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const loadDishByRestaurantIfNotExist = createAsyncThunk(
    "review/loadReviewsByRestaurantIfNotExist",
    async (restaurantId) => {
        const response = await fetch(
            `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
        );

        return await response.json();
    }
);
