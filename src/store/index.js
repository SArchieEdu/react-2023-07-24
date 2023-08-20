import {createStore, combineReducers, applyMiddleware} from "redux";
import {cartReducer} from "./features/cart";
import {restaurantReducer} from "./features/restaurant";
import {dishReducer} from "./features/dish";
import {userReducer} from "./features/users";
import {reviewReducer} from "./features/review";
import {authReducer} from "./features/auth";
import {loggerMiddleware} from "./midlewares/logger";
import {authenticated} from "./midlewares/authentication";

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
  dish: dishReducer,
  user: userReducer,
  review: reviewReducer,
  auth: authReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, authenticated)
);

console.log(store.getState());
