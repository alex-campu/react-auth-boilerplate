import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  user: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = true
      state.user = action.payload
    },
    logOut: (state) => {
      state.isLoggedIn = false
    }
  }
})

export const { logIn, logOut } = authSlice.actions

export const selectIsAuth = (state) => state.auth.isLoggedIn

export default authSlice.reducer
