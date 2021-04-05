import {
  createReducer,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const clearUser = createAction("CLEAR_USER");
export const setUser = createAction("SET_USER");

export const registerRequest = createAsyncThunk("REGISTER_REQUEST", (input) => {
  return axios
    .post("http://localhost:8000/api/register", input)
    .then((res) => res.data)
    .then((user) => user)
    .catch((e) => console.log(e));
});

// export const fetchMe = createAsyncThunk("FETCH_ME", () => {
//   const loginToken = JSON.parse(localStorage.getItem("user")).token;
//   console.log(loginToken);
//   return axios
//     .get(`http://localhost:8000/api/me`, {
//       headers: { Authorization: `Bearer ${loginToken}` },
//     })
//     .then((r) => {
//       console.log("data ===>", r.data);
//       return r.data;
//     });
// });
const  parseJwt = (token) => {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
};

export const loginRequest = createAsyncThunk("LOGIN_REQUEST", (user) => {
  return axios
    .post("http://localhost:8000/api/login", user)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      const data = parseJwt(res.data.token);
      console.log("ACA ESTA EL USUARIO PARSEADO",data)
      return data;

    })
    .catch("Error en las credenciales");
});

export const sendToken = createAsyncThunk("LOGIN", (token,thunkAPI) => {
  console.log("llego hasta aca")
    return axios.post("http://localhost:8000/api/me",{}, {headers: { Authorization: `Bearer ${token}`}} )
    .then((res)=> res.data) 
    .catch((err) => console.log(err))
  });

const userReducer = createReducer([], {
  // [fetchMe.fulfilled]: (state, action) => action.payload,
  [setUser]: (state, action) => action.payload,
  [loginRequest.fulfilled]: (state, action) => action.payload,
  [registerRequest.fulfilled]: (state, action) => action.payload,
  [sendToken.fulfilled]: (state, action) => action.payload,
  [clearUser]: (state, action) => {
    return {};
  },
});

export default userReducer;
