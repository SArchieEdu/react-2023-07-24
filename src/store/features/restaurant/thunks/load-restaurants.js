import {
  failLoadingRestaurants,
  finishLoadingRestaurants,
  startLoadingRestaurants,
} from "../action";
import { selectIsRestaurantsLoaded } from "../selectors.js";

export const loadRestaurantsIfNotExist =
  () => (dispatch, getState) => {
    const state = getState();
    const isLoaded = selectIsRestaurantsLoaded(state);

    if (isLoaded) {
      return;
    }

    dispatch(startLoadingRestaurants());

    fetch(`http://localhost:3001/api/restaurants/`)
      .then((response) => response.json())
      .then((restaurants) => dispatch(finishLoadingRestaurants(restaurants)))
      .catch(() => dispatch(failLoadingRestaurants()));
  };
