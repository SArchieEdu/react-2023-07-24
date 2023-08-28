import {
  startLoadingRestaurants,
  finishLoadingRestaurants,
  failLoadingRestaurants,
} from "../action";
import { selectIsRestaurantLoadingFinished } from "../selectors";

export const loadRestaurants = () => async (dispatch, getState) => {
  const isFinished = selectIsRestaurantLoadingFinished(getState());

  if (isFinished) {
    return;
  }

  dispatch(startLoadingRestaurants);

  try {
    const response = await fetch("http://localhost:3001/api/restaurants");
    const data = await response.json();
    dispatch(finishLoadingRestaurants(data));
  } catch (error) {
    failLoadingRestaurants(error);
  }
};
