import { createStore, combineReducers, applyMiddleware } from "redux";
import { cartReducer } from "./features/cart";
import { restaurantReducer } from "./features/restaurant";
import { loggerMiddleware } from "./midlewares/logger";
import { reviewReducer } from "./features/review/index.js";
import { dishReducer } from "./features/dish/index.js";
import { userReducer } from "./features/user/index.js";
import { authReducer } from "./features/auth/index.js";
import { authMiddleware } from "./midlewares/auth.js";

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
  dish: dishReducer,
  review: reviewReducer,
  user: userReducer,
  auth: authReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, authMiddleware),
);

console.log(store.getState());
