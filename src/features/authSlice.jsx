import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser, signUpUser, updateUserProfile } from "../Service";

const initialState = {
  token: JSON.parse(localStorage?.getItem("authToken")),
  user: JSON.parse(localStorage?.getItem("userData")),
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await loginUser(email, password);

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/signup",
  async ({ firstName, lastName, email, password }, thunkAPI) => {
    try {
      const response = await signUpUser(firstName, lastName, email, password);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const updateUser = createAsyncThunk(
  "post/updateuser",
  async ({ token, userData }, thunkAPI) => {
    try {
      const response = await updateUserProfile(token, userData);

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      localStorage.removeItem("userData");
      localStorage.removeItem("authToken");
      return {
        token: "",
        user: "",
      };
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.status = "pending";
    },
    [login.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.token = action.payload.encodedToken;
      state.user = action.payload.foundUser;
      localStorage.setItem("authToken", JSON.stringify(state.token));
      localStorage.setItem("userData", JSON.stringify(state.user));
    },
    [login.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
    [signUp.pending]: (state) => {
      state.status = "pending";
    },
    [signUp.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.token = action.payload.encodedToken;
      state.user = action.payload.createdUser;
      localStorage.setItem("authToken", JSON.stringify(state.token));
      localStorage.setItem("userData", JSON.stringify(state.user));
    },
    [signUp.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },

    [updateUser.pending]: (state) => {
      state.status = "pending";
    },
    [updateUser.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.user = action.payload.user;
      localStorage.setItem("userData", JSON.stringify(state.user));
    },
    [updateUser.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
  },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
