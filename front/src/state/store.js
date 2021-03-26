import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cadeteReducer from "./CadetesReducer";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    cadete: cadeteReducer,
  },
});

export default store;
