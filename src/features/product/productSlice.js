import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  fetchAllProducts,
} from './productAPI';

const initialState = {
  products: [],
  status: 'idle',
  productDetail: {}
};


export const fetchAllProductsAsync = createAsyncThunk(
  'product/fetchAllProducts',
  async () => {
    const response = await fetchAllProducts();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
     getProductDetail: (state,action) => {
      state.productDetail = action.payload;
     },
     addProduct: (state,action) =>{
      state.products.push(action.payload)
     }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      });
  },
});

export const  { getProductDetail,addProduct } = productSlice.actions;

export const selectAllProducts = (state) => state.product.products;
export const selectProductDetails = (state) => state.product.productDetail;

export default productSlice.reducer;