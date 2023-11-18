import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkUser, loginUser } from "./authAPI";

const initialState = {
  status: "idle",
  isLogggedIn: false,
  userDetails: null,
  error: null,
};

export const loginUserAsync = createAsyncThunk(
  "auth/loginUser",
  async (data) => {
    const response = await loginUser(data);
    return response.data;
  }
);

export const checkUserAsync = createAsyncThunk(
  "auth/checkUser",
  async () => {
    try{
    const response = await checkUser();
    return response.data;
    }
    catch(error){
      throw error;
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.isLogggedIn = action.payload.success;
        state.userDetails = action.payload.user;
        localStorage.setItem("token", action.payload.authtoken);
      })
      .addCase(loginUserAsync.rejected, (state,action) => {
        state.status = "idle";
        state.error = action.payload.error;
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.isLogggedIn = action.payload.success;
        state.userDetails = action.payload.user;
      })
      .addCase(checkUserAsync.rejected, (state,action) => {
        state.status = "idle";
        state.error = action.error;
        state.userDetails = {};
      });
  },
});


export const selectUserDetails = (state) => state.auth.userDetails;
export const selectLoggedInUser = (state) => state.auth.isLogggedIn;


export default authSlice.reducer;
