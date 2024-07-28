import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkUser, createUser, loginUser } from "./authAPI";

const initialState = {
  status: "idle",
  isLoggedIn: null,
  isLoading:true,
  userDetails: null,
  error: null,
};

export const loginUserAsync = createAsyncThunk(
  "auth/loginUser",
  async (data) => {
    try {
      const response = await loginUser(data);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const createUserAsync = createAsyncThunk(
  "auth/createUser",
  async (data) => {
    try {
      const response = await createUser(data);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const checkUserAsync = createAsyncThunk("auth/checkUser", async () => {
  try {
    const response = await checkUser();
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleLogOutSession: (state, action) =>{
    state.isLoggedIn = null;
    state.userDetails = null;
    state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.isLoggedIn = action.payload.success;
        localStorage.setItem("token", action.payload.authToken);
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      })
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.isLoggedIn = action.payload.success;
        state.userDetails = action.payload.user;
        localStorage.setItem("token", action.payload.authToken);
      })
      .addCase(createUserAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.isLoggedIn = action.payload.success;
        state.userDetails = action.payload._doc;
        state.isLoading = false;
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
        state.isLoggedIn = false;
        state.userDetails = {};
        state.isLoading = false;
      });
  },
});

export const selectUserDetails = (state) => state.auth.userDetails;
export const selectLoggedInUser = (state) => state.auth.isLoggedIn;
export const selectLoading = (state) => state.auth.isLoading;
export const selectLogInError = (state) => state.auth.error;

export const { handleLogOutSession } = authSlice.actions;

export default authSlice.reducer;
