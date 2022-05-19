import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllPostsFromServer,
  getUserPostsFromServer,
  likePostService,
  disLikePostService,
  getBookmarkedPosts,
  removePostFromBookmark,
  addPostToBookmark,
  createPostService,
  editPostService,
  deletePostService,

} from "../Service";

const initialState = {
  allPost: [],
  userPosts: [],
  bookmarkedPosts : [],
  postModal : false,
  postOnModal : {}
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

export const bookmarkPost = createAsyncThunk(
    "post/bookmarkpost",
    async ({ token, postId}, thunkAPI) => {
      try {
        const response = await addPostToBookmark(token, postId);
       
        return response.data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err);
      }
    }
  );
  export const removeBookmarkedPost = createAsyncThunk(
    "post/removebookmarkpost",
    async ({ token, postId }, thunkAPI) => {
      try {
        const response = await removePostFromBookmark(token, postId);
     
        return response.data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err);
      }
    }
  );
  export const getBookmarkedPost = createAsyncThunk(
    "get/bookmarkedpost",
    async ({ token }, thunkAPI) => {
      try {
        const response = await getBookmarkedPosts(token);
        return response.data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err);
      }
    }
  );
  export const createPost = createAsyncThunk(
    "post/createpost",
    async ({ token, post }, thunkAPI) => {
      try {
        const response = await createPostService(token, post);
        return response.data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err);
      }
    }
  );
  export const editPost = createAsyncThunk(
    "post/editpost",
    async ({ token, post }, thunkAPI) => {
      try {
        const response = await editPostService(token, post);
        return response.data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err);
      }
    }
  );
  export const deletePost = createAsyncThunk(
    "post/deletepost",
    async ({ token, postId }, thunkAPI) => {
      try {
        const response = await deletePostService(token, postId);
        return response.data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err);
      }
    }
  );
export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers:  {
    setPostModal : (state,action) => {
        if(action.payload){
          state.postOnModal = action.payload
        }
        state.postModal = !state.postModal;
       
    }
},
  extraReducers: {
    [getAllPost.pending]: (state) => {
      state.status = "pending";
    },
    [getAllPost.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allPost = action.payload.posts;
      console.log("all post fulfilled")
    },
    [getAllPost.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
      console.log("all post rejected")
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
    [bookmarkPost.pending]: (state) => {
        state.status = "pending";
      },
      [bookmarkPost.fulfilled]: (state, action) => {
        state.status = "fulfilled";
      
        state.allPost = action.payload.posts;
      },
      [bookmarkPost.rejected]: (state, action) => {
        state.status = "error";
        state.error = action.payload;
      },
      [removeBookmarkedPost.pending]: (state) => {
        state.status = "pending";
      },
      [removeBookmarkedPost.fulfilled]: (state, action) => {
        state.status = "fulfilled";
     
        state.allPost = action.payload.posts;
      },
      [removeBookmarkedPost.rejected]: (state, action) => {
        state.status = "error";
        state.error = action.payload;
      },
      [getBookmarkedPost.pending]: (state) => {
        state.status = "pending";
      },
      [getBookmarkedPost.fulfilled]: (state, action) => {
        state.status = "fulfilled";
     
        state.bookmarkedPosts = action.payload.bookmarks;
      },
      [getBookmarkedPost.rejected]: (state, action) => {
        state.status = "error";
        state.error = action.payload;
      },
      [createPost.pending]: (state) => {
        state.status = "pending";
      },
      [createPost.fulfilled]: (state, action) => {
        state.status = "fulfilled";
        console.log("resonse" , action.payload.posts)
        state.allPost = action.payload.posts;
      },
      [createPost.rejected]: (state, action) => {
        state.status = "error";
        state.error = action.payload;
      },
      [editPost.pending]: (state) => {
        state.status = "pending";
      },
      [editPost.fulfilled]: (state, action) => {
        state.status = "fulfilled";
     
        state.allPost = action.payload.posts;
        console.log("edit post fulfilled")
      },
      [editPost.rejected]: (state, action) => {
        state.status = "error";
        state.error = action.payload;
        console.log("edit post rejected")
      },
      [deletePost.pending]: (state) => {
        state.status = "pending";
      },
      [deletePost.fulfilled]: (state, action) => {
        state.status = "fulfilled";
        console.log("delete",action.payload)
        state.allPost = action.payload.posts;
      },
      [deletePost.rejected]: (state, action) => {
        state.status = "error";
        state.error = action.payload;
      },

    }
});

export const { setPostModal } = postSlice.actions;
export default postSlice.reducer;
