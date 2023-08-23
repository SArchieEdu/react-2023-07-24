import {
  startLoadingRestaurants,
  finishLoadingRestaurants,
  failLoadingRestaurants,
} from "../action";

export const loadRestaurants = () => (dispatch, getState) => {
  const state = getState();
  if (state.restaurant.updated === false) {
    return;
  }
  dispatch(startLoadingRestaurants());

  fetch(`http://localhost:3001/api/restaurants`)
    .then((response) => response.json())
    .then((restaurants) => dispatch(finishLoadingRestaurants(restaurants)))
    .catch(() => dispatch(failLoadingRestaurants));
};
