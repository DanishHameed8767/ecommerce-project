import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkUser, createUser, loginUser } from "./authAPI";

const initialState = {
  status: "idle",
  isLoggedIn: null,
  userDetails: null,
  error: null,
  alert: null,
};

export const loginUserAsync = createAsyncThunk(
  "auth/loginUser",
  async (data) => {
    try {
      const response = await loginUser(data);
      console.log("data returned", response);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const createUserAsync = createAsyncThunk(
  "auth/createUser",
  async (data) => {
    try {
      const response = await createUser(data);
      console.log("data returned", response);
      return response;
    } catch (error) {
      console.log(error);
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.isLoggedIn = action.payload.success;
        state.userDetails = action.payload.user;
        console.log(action.payload.authToken);
        localStorage.setItem("token", action.payload.authToken);
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
        state.alert = { type: "danger", msg: action.error.message };
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
        state.alert = { type: "danger", msg: action.error.message };
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.isLoggedIn = action.payload.success;
        state.userDetails = action.payload.user;
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
        state.isLoggedIn = false;
        state.userDetails = {};
      });
  },
});

export const selectUserDetails = (state) => state.auth.userDetails;
export const selectLoggedInUser = (state) => state.auth.isLoggedIn;
export const selectLogInAlert = (state) => state.auth.alert;

export default authSlice.reducer;
