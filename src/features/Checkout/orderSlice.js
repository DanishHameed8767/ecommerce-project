import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addOrder, showOrders } from "./orderAPI";

const initialState = {
  items: [],
  status: "idle",
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
        state.items.push(action.payload);
      });
  },
});

export const selectAllOrders = (state) => state.order.items;

export default orderSlice.reducer;
