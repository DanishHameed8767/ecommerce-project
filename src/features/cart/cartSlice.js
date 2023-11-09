import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  clearCart,
  delFromCart,
  fetchAllCartProducts,
  updateCart,
} from "./cartAPI";

const initialState = {
  items: [],
  status: "idle",
};

export const fetchAllCartProductsAsync = createAsyncThunk(
  "cart/fetchAllCartProducts",
  async () => {
    const response = await fetchAllCartProducts();
    return response.data;
  }
);

export const addToCartAsync = createAsyncThunk(
  "cart/addToCart",
  async (detail) => {
    const response = await addToCart(detail);
    return response.data;
  }
);

export const delFromCartAsync = createAsyncThunk(
  "cart/delFromCart",
  async (detail) => {
    const response = await delFromCart(detail);
    return response.data;
  }
);

export const updateCartAsync = createAsyncThunk(
  "cart/updateCart",
  async (item) => {
    const response = await updateCart(item);
    return response.data;
  }
);

export const clearCartAsync = createAsyncThunk("cart/clearCart", async () => {
  const response = await clearCart();
  return response.data;
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCartProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllCartProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      })
      .addCase(addToCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items.push(action.payload);
      })
      .addCase(delFromCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(delFromCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(
          (item) => item._id === action.payload._id
        );
        state.items.splice(index, 1);
      })
      .addCase(updateCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(
          (item) => item._id === action.payload._id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(clearCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(clearCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = [];
      });
  },
});

export const selectAllCartProducts = (state) => state.cart.items;

export default cartSlice.reducer;
