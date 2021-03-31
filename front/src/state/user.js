import {
  createReducer,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setUser = createAction("SET_USER");
export const clearUser = createAction("CLEAR_USER");


export const registerRequest = createAsyncThunk("REGISTER_REQUEST", (input) => {
  console.log(input);
  return axios
    .post("http://localhost:8000/api/register", input)
    .then((res) => res.data)
    .then((user) => user)
    .catch((e) => console.log(e));

});

export const fetchMe = createAsyncThunk("FETCH_ME", () => {
  const loginToken = JSON.parse(localStorage.getItem("user")).token;
  return axios
    .get(`http://localhost:8000/api/me`, {
      headers: { Authorization: `Bearer ${loginToken}` },
    })
    .then((r) => {
      return r.data;
    });
});

export const loginRequest = createAsyncThunk("LOGIN_REQUEST", (user) => {
  return axios
    .post("http://localhost:8000/api/login", user)
    .then((res) => {
    localStorage.setItem("token", JSON.stringify(res.data.token));
    localStorage.setItem("user", JSON.stringify(res.data.user))
      return res.data;
    })
    .catch("Error en las credenciales");

});

const userReducer = createReducer([], {
  [fetchMe.fulfilled]: (state, action) => action.payload,
  [setUser]: (state, action) => action.payload,  
  [loginRequest.fulfilled]: (state, action) => action.payload,
  [registerRequest.fulfilled]: (state, action) => action.payload,
  [clearUser]: (state, action) => {
    return {};
  },
});

export default userReducer;