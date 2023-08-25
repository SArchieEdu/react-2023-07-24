import { createStore, combineReducers, applyMiddleware } from "redux";
import { cartReducer } from "./features/cart";
import { restaurantReducer } from "./features/restaurant";
import { loggerMiddleware } from "./middlewares/logger";
import { dishReducer } from "./features/dish";
import { reviewReducer } from "./features/review";
import { userReducer } from "./features/user";
import { authorizationReducer } from "./features/authorization";
import { checkAuthorization } from "./middlewares/check-authorization";
import { thunk } from "./middlewares/thunk";
import { requsetReducer } from "./features/request";

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
  dish: dishReducer,
  review: reviewReducer,
  user: userReducer,
  authorization: authorizationReducer,
  request: requsetReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    loggerMiddleware,
    checkAuthorization,
  )
);

console.log(store.getState());
