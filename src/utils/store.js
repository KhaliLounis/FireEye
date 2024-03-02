import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'; 
import modalReducer from './slices/modalSlice'; 
import sidebarReducer from './slices/sidebarSlice'; 

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    sidebar: sidebarReducer,
  },
});