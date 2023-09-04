import { cartSlice } from "./features/cart";
// import { restaurantSlice } from "./features/restaurant";
import { loggerMiddleware } from "./middlewares/logger";
// import { dishSlice } from "./features/dish";
// import { reviewSlice } from "./features/review";
// import { userSlice } from "./features/user";
import { authorizationSlice } from "./features/authorization";
import { checkAuthorization } from "./middlewares/check-authorization";
// import { requestSlice } from "./features/request";
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    // restaurant: restaurantSlice.reducer,
    // dish: dishSlice.reducer,
    // review: reviewSlice.reducer,
    // user: userSlice.reducer,
    authorization: authorizationSlice.reducer,
    // request: requestSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    api.middleware,
    loggerMiddleware,
    checkAuthorization,
  ],
});

setupListeners(store.dispatch);
