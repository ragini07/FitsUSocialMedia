import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'
import userReducer from '../features/userSlice'
import postReducer from '../features/postSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    post : postReducer,
  },
})