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
    },
    checkingFinish: (state) => {
      state.checking = false
    },
    logout: (state) => {
      state.checking = false
      state.username = ''
      state.email = ''
      state.token = ''
    }
  }
})

export const {
  login, checkingFinish, logout
} = authSlice.actions

export const authReducer = authSlice.reducer
