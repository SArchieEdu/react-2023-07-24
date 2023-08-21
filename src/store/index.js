import { createStore, combineReducers, applyMiddleware } from "redux";
import { cartReducer } from "./features/cart";
import { restaurantReducer } from "./features/restaurant";
import { loggerMiddleware } from "./midlewares/logger";
import { dishesReducer } from "./features/dishes";
import {reviewsReducer} from "./features/reviews";

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
  dishes: dishesReducer,
  reviews: reviewsReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware)
);

console.log(store.getState());
