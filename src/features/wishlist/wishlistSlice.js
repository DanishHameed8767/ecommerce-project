import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addToWishlist, delFromWishlist, fetchAllWishlistProducts } from './wishlistAPI';

const initialState = {
  items: [],
  status: 'idle',
};

export const fetchAllWishlistProductsAsync = createAsyncThunk(
  'wishlist/fetchAllWishlistProducts',
  async () => {
    const response = await fetchAllWishlistProducts();
    return response.data;
  }
);


export const addToWishlistAsync = createAsyncThunk(
  'wishlist/addToWishlist',
  async (detail) => {
    const response = await addToWishlist(detail);
    return response.data;
  }
)

export const delFromWishlistAsync = createAsyncThunk(
  'wishlist/delFromWishlist',
  async (detail) => {
    const response = await delFromWishlist(detail);
    return response.data;
  }
)

// export const updateCartAsync = createAsyncThunk(
//   'cart/updateCart',
//   async (item) => {
//     await updateCart(item);
//   }
// )

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllWishlistProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllWishlistProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(addToWishlistAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToWishlistAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push(action.payload);
      })
      .addCase(delFromWishlistAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(delFromWishlistAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex(item=>item._id==action.payload._id)
        state.items.splice(index,1);
      })
    //   .addCase(updateCartAsync.pending, (state) => {
    //     state.status = 'loading';
    //   })
    //   .addCase(updateCartAsync.fulfilled, (state) => {
    //     state.status = 'idle';
    //     console.log("success");
    //  })
  },
});


export const selectAllWishlistProducts = (state) => state.wishlist.items;

export default wishlistSlice.reducer;
