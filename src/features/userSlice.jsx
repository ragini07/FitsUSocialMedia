import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  updateUserProfile , getAllUsersFromServer} from "../Service";

const initialState = {
   users : [],
   status : "idle",
   error : null
}

export const getAllUsers = createAsyncThunk(
    "get/users",
    async (_, thunkAPI) => {
      try {
       
        const response = await getAllUsersFromServer();
        console.log(response)
        return response.data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err);
      }
    }
  );

  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
     
    
    },
    extraReducers : {
        [getAllUsers.pending]: (state) => {
            state.status = "pending";
          },
        [getAllUsers.fulfilled] : (state,action) => {
            console.log(action.payload)
            state.status = "fulfilled";
            state.users = action.payload.users;
          
        },
        [getAllUsers.rejected]: (state, action) => {
            state.status = "error";
            state.error = action.payload;
          },
         
     
    }
  })
  

  
  export default userSlice.reducer