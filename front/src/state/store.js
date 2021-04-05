import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import userReducer from "./user";
import ordersReducer from "./orders";
import cadeteriaReducer from "./cadeteria";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    cadete: userReducer,
    orders: ordersReducer,
    cadeteria:cadeteriaReducer,
  },
});

export default store;
