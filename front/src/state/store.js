import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import userReducer from "./user";
import orderReducer from "./orders";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    cadete: userReducer,
    orders: orderReducer,
    /*cadeteria: cadeteriaReducer,*/
  },
});

export default store;
