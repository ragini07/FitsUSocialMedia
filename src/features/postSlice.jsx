import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllPostsFromServer,
  getUserPostsFromServer,
  likePostService,
  disLikePostService,
} from "../Service";

const initialState = {
  allPost: [],
  userPosts: [],
};

export const getAllPost = createAsyncThunk(
  "get/allposts",
  async (_, thunkAPI) => {
    try {
      const response = await getAllPostsFromServer();

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const getUserPosts = createAsyncThunk(
  "get/userposts",
  async (username, thunkAPI) => {
    try {
      const response = await getUserPostsFromServer(username);

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const likePost = createAsyncThunk(
  "post/likePost",
  async ({ token, postId }, thunkAPI) => {
    try {
      const response = await likePostService(token, postId);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const disLikePost = createAsyncThunk(
  "post/dislikePost",
  async ({ token, postId }, thunkAPI) => {
    try {
      const response = await disLikePostService(token, postId);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllPost.pending]: (state) => {
      state.status = "pending";
    },
    [getAllPost.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allPost = action.payload.posts;
    },
    [getAllPost.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
    [getUserPosts.pending]: (state) => {
      state.status = "pending";
    },
    [getUserPosts.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.userPosts = action.payload.posts;
    },
    [getUserPosts.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },

    [likePost.pending]: (state) => {
      state.status = "pending";
    },
    [likePost.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allPost = action.payload.posts;
    },
    [likePost.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
    [disLikePost.pending]: (state) => {
      state.status = "pending";
    },
    [disLikePost.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allPost = action.payload.posts;
    },
    [disLikePost.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
