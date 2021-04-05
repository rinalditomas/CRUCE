import {
  createReducer,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import axios from "axios";

const setCadeteria = createAction('SET_CADETERIA')

export const bringCadeteriasNoAdminRequest = createAsyncThunk("BRINGCADETERIANOADMIN_REQUEST", () => {
  return axios
  .get("http://localhost:8000/api/register/bringCadeterias")
  .then((res) => res.data)
  .catch((e) => console.log(e));
});

const cadeteriaReducer = createReducer([],{
  [setCadeteria]: (state, action) => action.payload,
  [bringCadeteriasNoAdminRequest]: (state, action) => action.payload,
})
export default cadeteriaReducer;