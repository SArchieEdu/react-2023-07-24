import { cartReducer } from "./features/cart";
import { restaurantSlice } from "./features/restaurant";
import { loggerMiddleware } from "./middlewares/logger";
import { dishSlice } from "./features/dish";
import { reviewSlice } from "./features/review";
import { userSlice } from "./features/user";
import { authorizationReducer } from "./features/authorization";
import { checkAuthorization } from "./middlewares/check-authorization";
import { requestSlice } from "./features/request";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    restaurant: restaurantSlice.reducer,
    dish: dishSlice.reducer,
    review: reviewSlice.reducer,
    user: userSlice.reducer,
    authorization: authorizationReducer,
    request: requestSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    loggerMiddleware,
    checkAuthorization, 
  ],
});
