import {
  createReducer,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import axios from "axios";

const setCadeteria = createAction('SET_CADETERIA')

const cadeteriaReducer = createReducer([],{
  [setCadeteria]: (state, action) => action.payload,
})