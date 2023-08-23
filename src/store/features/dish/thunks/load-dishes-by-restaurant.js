import {
  failLoadingDishes,
  finishLoadingDishes,
  startLoadingDishes,
} from "../action";

let currentRestaurantId;

export const loadDishesByRestaurantIfNotExist =
  (restaurantId) => (dispatch, getState) => {
    const state = getState();
    if (state.dish.ids.length > 0 && currentRestaurantId === restaurantId) {
      return;
    }
    currentRestaurantId = restaurantId;

    dispatch(startLoadingDishes());

    fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`)
      .then((response) => response.json())
      .then((restaurants) => dispatch(finishLoadingDishes(restaurants)))
      .catch(() => dispatch(failLoadingDishes()));
  };
