import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  delFromCart,
  fetchAllCartProducts,
  mergeCarts,
  updateCart,
} from "./cartAPI";

const initialState = {
  cartItems: [],
  status: "idle",
  error: null,
};

export const fetchAllCartProductsAsync = createAsyncThunk(
  "cart/fetchAllCartProducts",
  async () => {
    try {
      const response = await fetchAllCartProducts();
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const addToCartAsync = createAsyncThunk(
  "cart/addToCart",
  async (product) => {
    try {
      const response = await addToCart(product);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const mergeCartsAsync = createAsyncThunk(
  "cart/mergeCarts",
  async (localCart) => {
    try {
     const response =  await mergeCarts(localCart);
     return response;
    } catch (error) {
      throw error;
    }
  }
);

export const delFromCartAsync = createAsyncThunk(
  "cart/delFromCart",
  async (detail) => {
    try {
      const response = await delFromCart(detail);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const updateCartAsync = createAsyncThunk(
  "cart/updateCart",
  async (item) => {
    try {
      const response = await updateCart(item);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    fetchLocalStorageCart: (state) => {
      const cart = JSON.parse(localStorage.getItem("cart"));
      if(cart) {
        state.cartItems = cart;
      } else {
        state.cartItems = [];
        localStorage.setItem("cart",JSON.stringify([]));
      }
    },
    addToLocalStorageCart: (state, action) => {
      const cartItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.product._id === action.payload._id
      );
      if(cartItemIndex>=0){
        // If product is already present in cart, do nothing.
        return;
      }
      state.cartItems.push({ product: action.payload, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    deleteFromLocalStorageCart: (state, action) => {
      const cartItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.product._id === action.payload._id
      );
      state.cartItems.splice(cartItemIndex, 1);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    updateLocalStorageCart: (state, action) => {
      const cartItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.product._id === action.payload.product._id
      );
      state.cartItems.splice(cartItemIndex, 1, {
        product: action.payload.product,
        quantity: action.payload.quantity,
      });
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    clearLocalStorageCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cart");
    },
    handleLogOutCart:(state) => {
      state.cartItems = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCartProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllCartProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.cartItems = action.payload;
      })
      .addCase(fetchAllCartProductsAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      })
      .addCase(addToCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.cartItems.push(action.payload);
      })
      .addCase(addToCartAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      })
      .addCase(delFromCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(delFromCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const cartItemIndex = state.cartItems.findIndex(
          (cartItem) => cartItem._id === action.payload._id
        );
        state.cartItems.splice(cartItemIndex, 1);
      })
      .addCase(delFromCartAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      })
      .addCase(updateCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const cartItemIndex = state.cartItems.findIndex(
          (item) => item._id === action.payload._id
        );
        state.cartItems.splice(cartItemIndex, 1, action.payload);
      })
      .addCase(updateCartAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      })
      .addCase(mergeCartsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(mergeCartsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.cartItems = action.payload;
        localStorage.removeItem("cart");
      })
      .addCase(mergeCartsAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      })

  },
});

export const selectAllCartProducts = (state) => state.cart.cartItems;

export const {
  fetchLocalStorageCart,
  addToLocalStorageCart,
  deleteFromLocalStorageCart,
  updateLocalStorageCart,
  clearLocalStorageCart,
  handleLogOutCart
} = cartSlice.actions;

export default cartSlice.reducer;
