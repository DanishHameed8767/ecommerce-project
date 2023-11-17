import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchAllProductsByCategory, fetchAllSales, fetchArrivalsById, fetchProductById, fetchSalesById, updateProductStock } from "./productAPI";

const initialState = {
  products: [],
  status: "idle",
  productDetail: null,
  saleProducts: [],
  productsList: [],
};

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchAllSalesAsync = createAsyncThunk(
  "product/fetchAllSales",
  async () => {
    const response = await fetchAllSales();
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

export const fetchSalesByIdAsync = createAsyncThunk(
  'product/fetchSalesById',
  async (id) => {
    const response = await fetchSalesById(id);
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
    viewSaleProducts: (state,action) => {
      state.productsList = action.payload;
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
      .addCase(fetchAllSalesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllSalesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const items = action.payload.filter(item => item.saleStarts);
        const itemsStock = action.payload.filter(item => item.saleStock > 0);
        // console.log(items,itemsStock);
        state.saleProducts = [...items, ...itemsStock];
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
      .addCase(fetchSalesByIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSalesByIdAsync.fulfilled, (state, action) => {
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
        console.log(action.error);
      })
  },
});

export const { getProductDetail, showProduct, viewSaleProducts } = productSlice.actions;

export const selectAllProducts = (state) => state.product.products;
export const selectAllProductsList = (state) => state.product.productsList;
export const selectAllSaleProducts = (state) => state.product.saleProducts;
export const selectProductDetails = (state) => state.product.productDetail;

export default productSlice.reducer;
