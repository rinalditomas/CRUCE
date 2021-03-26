import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk("REGISTER_REQUEST", (input) => {
  console.log(input);
  return axios
    .post("http://localhost:8000/api/register", input)
    .then((res) => res.data)
    .then((user) => user)
    .catch((e) => console.log(e));
});

export const login = createAsyncThunk("LOGIN_REQUEST", (data) => {
  return axios
    .post("http://localhost:8000/api/login", {
      email: data.email,
      password: data.password,
    })
    .then((respuesta) => respuesta.data);
});

export const setCadete = createAction("SET_CADETE");

export const logout = createAction("LOGOUT");

const cadeteReducer = createReducer([], {
  [login.fulfilled]: (state, action) => action.payload,
  [logout]: (state, action) => [],
  [setCadete]: (state, action) => action.payload,
  [register.fulfilled]: (state, action) => action.payload,
});

export default cadeteReducer;
