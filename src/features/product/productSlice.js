import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchAllProductsByCategory, fetchArrivalsById, fetchProductById, searchProducts, updateProductStock } from "./productAPI";

const initialState = {
  products: [],
  status: "idle",
  productDetail: null,
  productsList: [],
};

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async (type) => {
    const response = await fetchAllProducts(type);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchAllProductsByCategoryAsync = createAsyncThunk(
  "product/fetchAllProductsByCategory",
  async (data) => {
    const response = await fetchAllProductsByCategory(data);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchProductByIdAsync = createAsyncThunk(
  'product/fetchProductById',
  async (id) => {
    const response = await fetchProductById(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchArrivalsByIdAsync = createAsyncThunk(
  'product/fetchArrivalsById',
  async (id) => {
    const response = await fetchArrivalsById(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const updateProductStockAsync = createAsyncThunk(
  "product/updateProductStock",
  async (item) => {
    const response = await updateProductStock(item);
    return response.data;
  }
)

export const searchProductsAsync = createAsyncThunk(
  "product/searchProducts",
  async (keyword) => {
    const response = await searchProducts(keyword);
    return response.data;
  }
)

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductDetail: (state, action) => {
      state.productDetail = action.payload;
    },
    showProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchAllProductsByCategoryAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsByCategoryAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.productsList = action.payload;
      })
      .addCase(fetchProductByIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.productDetail = action.payload;
      })
      .addCase(fetchArrivalsByIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArrivalsByIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.productDetail = action.payload;
      })
      .addCase(updateProductStockAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProductStockAsync.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(updateProductStockAsync.rejected, (state,action) => {
        state.status = "idle";
      })
      .addCase(searchProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchProductsAsync.fulfilled, (state,action) => {
        state.status = "idle";
        state.productsList = action.payload;
      })
      .addCase(searchProductsAsync.rejected, (state,action) => {
        state.status = "idle";
      })
  },
});

export const { getProductDetail, showProduct } = productSlice.actions;

export const selectAllProducts = (state) => state.product.products;
export const selectAllProductsList = (state) => state.product.productsList;
export const selectProductDetails = (state) => state.product.productDetail;

export default productSlice.reducer;
