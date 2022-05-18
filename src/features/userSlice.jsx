import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  updateUserProfile,
  getAllUsersFromServer,
  followUserService,
  unFollowUserService,
} from "../Service";
import { updateUser } from "./authSlice";

const initialState = {
  users: [],
  status: "idle",
  error: null,
  profileModal : false
};

export const getAllUsers = createAsyncThunk(
  "get/users",
  async (_, thunkAPI) => {
    try {
      const response = await getAllUsersFromServer();

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const followUser = createAsyncThunk(
  "post/followuser",
  async ({ token, id, dispatch }, thunkAPI) => {
    try {
      const response = await followUserService(token, id);

      dispatch(updateUser({ token: token, userData: response.data.user }));
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const unfollowUser = createAsyncThunk(
  "post/unfollowuser",
  async ({ token, id, dispatch }, thunkAPI) => {
    try {
      const response = await unFollowUserService(token, id);
      dispatch(updateUser({ token: token, userData: response.data.user }));
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
      setProfileModal : (state) => {
       
          state.profileModal = !state.profileModal;
      }
  },
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.status = "pending";
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.users = action.payload.users;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
    [followUser.pending]: (state) => {
      state.status = "pending";
    },
    [followUser.fulfilled]: (state, action) => {
      state.status = "fulfilled";

      const username = action.payload.followUser.username;
      const index = state.users.findIndex((e) => e.username === username);
      state.users[index] = action.payload.followUser;
    },
    [followUser.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },

    [unfollowUser.pending]: (state) => {
      state.status = "pending";
    },
    [unfollowUser.fulfilled]: (state, action) => {
      state.status = "fulfilled";

      const username = action.payload.followUser.username;
      const index = state.users.findIndex((e) => e.username === username);
      state.users[index] = action.payload.followUser;
    },
    [unfollowUser.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
  },
});

export const { setProfileModal } = userSlice.actions;
export default userSlice.reducer;
