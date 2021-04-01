import {
  createReducer,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setOrders = createAction("SET_ORDERS");

export const ordersList = createAsyncThunk("OREDERS_LIST", () => {
  return axios

    .get("http://localhost:8000/api/orders")
    .then((res) => res.data)
    .catch((e) => console.log(e));
});

export const orderState = createAsyncThunk(
  "ORDERS_STATE",
  (order, thunkApi) => {
    console.log(order);
    return axios

      .put(`http://localhost:8000/api/orders/edit/${order.id}`, {
        status: order.state,
      })
      .then((res) => res.data)
      .catch((e) => console.log(e));
  }
);

export const singleOrder = createAsyncThunk("SINGLE_ORDER", (id) => {
  return axios

    .get(`http://localhost:8000/api/orders/${id}`)
    .then((res) => res.data)
    .catch((e) => console.log(e));
});

const orderReducer = createReducer([], {
  [setOrders]: (state, action) => action.payload,
  [ordersList.fulfilled]: (state, action) => action.payload,
  [orderState.fulfilled]: (state, action) => action.payload,
  [singleOrder.fulfilled]: (state, action) => action.payload,
});

export default orderReducer;
