import { selectRestaurantIds } from "../selectors";
import { createAsyncThunk} from "@reduxjs/toolkit";


export const loadRestaurantsIfNotExist = createAsyncThunk(
    "restaurants/getRestaurants",
    async () => {

        const response = await fetch("http://localhost:3001/api/restaurants/")
        return await response.json();
    },
    {
        condition: (args, { getState }) => {
            const state = getState();
            const restaurantIds = selectRestaurantIds(state);
            return !restaurantIds.length;
        },
    }
);

