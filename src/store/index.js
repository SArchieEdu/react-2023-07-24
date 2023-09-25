import { cartSlice } from "./features/cart";
import { restaurantSlice } from "./features/restaurants";
import { loggerMiddleware } from "./middlewares/logger";
import { dishSlice } from "./features/dish";
import { userSlice } from "./features/user";
import { reviewSlice } from "./features/review";
import { authorizationSlice } from "./features/authorization";
import { checkAuthorization } from "./middlewares/check-authorization";
import { configureStore } from "@reduxjs/toolkit";
import { requestSlice } from "./features/request";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    restaurant: restaurantSlice.reducer,
    dish: dishSlice.reducer,
    user: userSlice.reducer,
    review: reviewSlice.reducer,
    authorization: authorizationSlice.reducer,
    request: requestSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    loggerMiddleware,
    checkAuthorization,
  ],
});
