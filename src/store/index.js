import { createStore, combineReducers, applyMiddleware } from "redux";
import { cartReducer } from "./features/cart";
import { restaurantReducer } from "./features/restaurant";
import { loggerMiddleware } from "./middlewares/logger";
import { dishReducer } from "./features/dish";
import { reviewsReducer } from "./features/reviews";
import { userReducer } from "./features/user";
import { authorizationReducer } from "./features/authorization";
import { checkAuthorization } from "./middlewares/check-authorization";
// import { loadRestaurantsIfNotExist } from "./features/restaurant/middlewares/load-restaurants";
import { thunk } from "./middlewares/thunk";

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
  dish: dishReducer,
  reviews: reviewsReducer,
  user: userReducer,
  authorization: authorizationReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    loggerMiddleware,
    checkAuthorization,
    // loadRestaurantsIfNotExist
  ),
);

console.log(store.getState());
