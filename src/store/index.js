import { createStore, combineReducers, applyMiddleware } from "redux";
import { cartReducer } from "./features/cart";
import { restaurantReducer } from "./features/restaurant";
import { dishesReducer } from "./features/dishes";
import { reviewsReducer } from "./features/reviews";
import { usersReducer } from "./features/users";
import { userReducer } from "./features/user";
import { loggerMiddleware } from "./midlewares/logger";

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
  dishes: dishesReducer,
  reviews: reviewsReducer,
  users: usersReducer,
  user: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

console.log(store.getState());
