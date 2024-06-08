import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addOrder, showOrders, startStripeCheckout } from "./orderAPI";
import { useDispatch } from "react-redux";

const initialState = {
  items: [],
  currentOrder:null,
  status: "idle",
  clientSecret:""
};

export const showOrdersAsync = createAsyncThunk(
  "order/showOrders",
  async () => {
    const response = await showOrders();
    return response.data;
  }
);

export const addOrderAsync = createAsyncThunk(
  "order/addOrder",
  async (data) => {
    const response = await addOrder(data);
    return response.data;
  }
);

export const startStripeCheckoutAsync = createAsyncThunk(
  "order/stripeCheckout",
  async (data) => {
    const response = await startStripeCheckout(data);
    return response.data;
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(showOrdersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(showOrdersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      })
      .addCase(addOrderAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addOrderAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.currentOrder = action.payload;
        state.items.push(action.payload);
      })
      .addCase(startStripeCheckoutAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(startStripeCheckoutAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.clientSecret = action.payload.clientSecret;
      });
  },
});

export const selectAllOrders = (state) => state.order.items;
export const selectPresentOrder = (state) => state.order.currentOrder;
export const selectClientSecret = (state) => state.order.clientSecret;

export default orderSlice.reducer;
