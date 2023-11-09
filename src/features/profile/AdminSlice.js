import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
    addCategory,
    addSubCategory,
    fetchAllCategories
} from './AdminAPI';

const initialState = {
  categories: [],
  status: 'idle',
};


export const fetchAllCategoriesAsync = createAsyncThunk(
  'admin/fetchAllCategories',
  async () => {
    const response = await fetchAllCategories();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const addCategoryAsync = createAsyncThunk(
  'admin/addCategory',
  async (data) => {
    const response = await addCategory(data);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const addSubCategoryAsync = createAsyncThunk(
  'admin/addSubCategory',
  async (data) => {
    const response = await addSubCategory(data);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategoriesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.categories = action.payload;
      })
      .addCase(addCategoryAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addCategoryAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.categories.push(action.payload);
      })
      .addCase(addSubCategoryAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addSubCategoryAsync.fulfilled, (state,action) => {
        state.status = 'idle';
        console.log(action.payload)
        const index = state.categories.findIndex(item=>item.category===action.payload.category)
        state.categories.splice(index,1,action.payload)
      })
  },
});


export const selectAllCategories = (state) => state.admin.categories;

export default adminSlice.reducer;