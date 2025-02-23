import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    checking: true,
    username: '',
    email: '',
    token: '',
    uuid: '',
  },
  reducers: {
    login: (state, action) => { // action.type = auth/login
      state.checking = false
      state.username = action.payload.username
      state.email = action.payload.email
      state.token = action.payload.token
      state.uuid = action.payload.uuid
    },
    checkingFinish: (state) => {
      state.checking = false
    },
    logout: (state) => {
      state.checking = false
      state.username = ''
      state.email = ''
      state.token = ''
      state.uuid = ''
    }
  }
})

export const {
  login, checkingFinish, logout
} = authSlice.actions

export const authReducer = authSlice.reducer
