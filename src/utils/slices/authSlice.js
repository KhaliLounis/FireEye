import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const api = "https://55b6-41-220-149-108.ngrok-free.app"

const initialState = {
      status: 'idle',
      error: null,
      token: null,
      isAuthenticated: localStorage.getItem('token') ? true : false,
      isAuthenticating: false,
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
    console.log(result.message);
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
    console.log(result.message);
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
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(adminLogin.pending, (state, action) => {
            state.isAuthenticating = true
         })
         .addCase(adminLogin.fulfilled, (state, action) => {
            console.log(action.payload)
            state.isAuthenticating = false
            // if (action.payload?.status === 200) {
            //    state.isAuthenticated = true
            //    localStorage.setItem('token', action.payload.data.token)
            //    state.token = action.payload.data.token
            // } else {
            //    state.isAuthenticated = false
            //    state.user = null
            //    state.token = null
            // }
         })
            .addCase(adminLogin.rejected, (state, action) => {
                state.isAuthenticating = false
                state.error = action.error.message
            })

   }
})

export const {logout} = authSlice.actions
export default authSlice.reducer