import {
  createReducer,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import axios from "axios";

const setCadeteria = createAction("SET_CADETERIA");

export const allCadeterias = createAsyncThunk("GET_ALL_CADETERIAS", () => {
  return axios
    .get("http://localhost:8000/api/cadeteria/allCadeterias")
    .then((res) => res.data)
    .catch((e) => console.log(e));
});

export const registerCadeteria = createAsyncThunk(
  "REGISTER_CADETERIA",
  (input) => {
    return axios
      .post("http://localhost:8000/api/cadeteria/register", input)
      .then((res) => res.data)
      .catch((e) => console.log(e));
  }
);

export const admitCadete = createAsyncThunk("ADMIT_CADETE", (id) => {
  return axios
    .put(`http://localhost:8000/api/cadeteria/admitCadete/${id}`)
    .then((res) => res.data);
});


const cadeteriaReducer = createReducer([], {
  [setCadeteria]: (state, action) => action.payload,
  [allCadeterias.fulfilled]: (state, action) => action.payload,
  [admitCadete.fullfiled]: (state,action) => action.paylad,
  [registerCadeteria]: (state, action) => action.payload,
});

export default cadeteriaReducer;
