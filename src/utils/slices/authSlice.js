/* eslint-disable no-undef */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const api = "https://b3ee-129-45-115-240.ngrok-free.app"

const initialState = {
      status: 'idle',
      error: null,
      token: null,
      isAuthenticated: localStorage.getItem('token') ? true : false,
      isAuthenticating: false,
      type: 'admin'
}


export const adminLogin = createAsyncThunk(
  'auth/adminLogin',
  async (data) => {
    try {
      const response = await fetch(`${api}/admin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (result.success){
        localStorage.setItem('token', result.token)
        initialState.isAuthenticated = true


      }
      // console.log(result)
    } catch (err) {
      console.error('Failed to log in:', err);
      return err.response;
    }
  }
);
export const userLogin = createAsyncThunk(
  'auth/userLogin',
  async (data) => {
    try {
      const response = await fetch(`${api}/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
    // console.log(result);
    } catch (err) {
      console.error('Failed to log in:', err);
      return err.response;
    }
  }
);


const authSlice = createSlice({
   name : 'auth',
   initialState,
   reducers: {
      logout(state, action){
         state.isAuthenticated = false
         state.user = null
         state.token = null
        localStorage.removeItem('token')
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(adminLogin.pending, (state, action) => {
            state.isAuthenticating = true
         })
         .addCase(adminLogin.fulfilled, (state, action) => {
        //     console.log(action)
        //     state.isAuthenticating = false
        //        state.isAuthenticated = true
        //        localStorage.setItem('token', action.payload.data.token)
        //        state.token = action.payload.data.token

         })
            .addCase(adminLogin.rejected, (state, action) => {
                state.isAuthenticating = false
                state.isAuthenticated = false
                state.error = action.error.message
            })
         .addCase(userLogin.pending, (state, action) => {
            state.isAuthenticating = true
         })
         .addCase(userLogin.fulfilled, (state, action) => {
            console.log(action)
            state.isAuthenticating = false
               state.isAuthenticated = true
               localStorage.setItem('token', action.payload.data.token)
               state.token = action.payload.data.token

         })
            .addCase(userLogin.rejected, (state, action) => {
                state.isAuthenticating = false
                state.isAuthenticated = false
                state.error = action.error.message
            })
         
   }
})

export const {logout} = authSlice.actions
export default authSlice.reducer