import {cartSlice} from "./features/cart/index";
import {authSlice} from "./features/authorization/index";
import {restaurantSlice} from "./features/restaurant";
import {loggerMiddleware} from "./middlewares/logger";
import {dishSlice} from "./features/dish/index";
import {reviewSlice} from "./features/review";
import {checkAuthorization} from "./middlewares/check-authorization";
import {requestSlice} from "./features/request";
import {userSlice} from "./features/user";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    restaurant: restaurantSlice.reducer,
    dish: dishSlice.reducer,
    review: reviewSlice.reducer,
    user: userSlice.reducer,
    authorization: authSlice.reducer,
    request: requestSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    loggerMiddleware,
    checkAuthorization,
  ],
});
