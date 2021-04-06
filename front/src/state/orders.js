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

export const orderState = createAsyncThunk("ORDERS_STATE",(order, thunkApi) => {
    return axios.put(`http://localhost:8000/api/orders/edit/${order.id}`, {status: order.state})
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
const updateOrder = (orders, newOrder) => {
  return orders.map((order) => (order.id === newOrder.id ? { ...order, status: newOrder.status } : order));
};
const initialState= {
  orders:[],
  singleOrder:{},
}
const ordersReducer = createReducer(initialState,{
  [setOrders]: (state, action) => action.payload,
  [ordersList.fulfilled]: (state, action) => {
    return{...state,orders:action.payload}},
  [orderState.fulfilled]: (state, action) => {
   return{...state,orders:updateOrder(state.orders,action.payload)} 
  },
  [singleOrder.fulfilled]: (state, action) => {
    return{...state,singleOrder:action.payload}}
});

export default ordersReducer;