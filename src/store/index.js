import { createStore, combineReducers, applyMiddleware } from "redux";
import { cartReducer } from "./features/cart";
import { restaurantReducer } from "./features/restaurant";
import { loggerMiddleware } from "./midlewares/logger";
import { dishReducer } from './features/dish/index';
import { reviewReducer } from './features/review/index';
import { userReducer } from "./features/user";

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
  dish: dishReducer,
  review: reviewReducer,
  user: userReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware)
);

console.log(store.getState());
