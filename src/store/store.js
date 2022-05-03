import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/reduxTutorial/counterSlice'
import authReducer from './auth/slice'
export const store = configureStore({
  reducer: {
    // counter: counterReducer, 
    auth: authReducer
  },
  devTools: true
})
