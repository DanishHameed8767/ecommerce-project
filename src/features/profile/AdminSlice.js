import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addProduct, fetchAllArrivals, updateArrival, uploadImage } from "./AdminAPI";

const initialState = {
  categories: [],
  arrivals:null,
  status: "idle",
  image:""
};

export const fetchAllArrivalsAsync = createAsyncThunk(
  "admin/fetchAllArrivals",
  async () => {
    const response = await fetchAllArrivals();
    return response.data;
  }
);

export const updateArrivalAsync = createAsyncThunk(
  "admin/updateArrival",
  async (data) => {
    const response = await updateArrival(data);
    return response.data;
  }
);

export const uploadImageAsync = createAsyncThunk(
  "admin/uploadImage",
  async (formData) => {
    const response = await uploadImage(formData);
    return response.data;
  }
);

export const addProductAsync = createAsyncThunk(
  "admin/addProduct",
  async (data) => {
    await addProduct(data);
  }
);

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllArrivalsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllArrivalsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.arrivals = action.payload;
      })
      .addCase(uploadImageAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(uploadImageAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.image = action.payload;
      })
      .addCase(addProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addProductAsync.fulfilled, (state) => {
        state.status = "idle";
      });
  },
});

export const selectAllCategories = (state) => state.admin.categories;
export const selectAllArrivals = (state) => state.admin.arrivals;
export const selectUploadedImage = (state) => state.admin.image;

export default adminSlice.reducer;
