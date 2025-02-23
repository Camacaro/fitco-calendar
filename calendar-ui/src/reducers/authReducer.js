import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    checking: true,
    username: '',
    email: '',
    token: '',
  },
  reducers: {
    login: (state, action) => { // action.type = auth/login
      state.checking = false
      state.username = action.payload.username
      state.email = action.payload.email
      state.token = action.payload.token
    }
  }
})

export const {
  login
} = authSlice.actions

export const authReducer = authSlice.reducer
