import { createSlice } from '@reduxjs/toolkit'

const calendarSlice = createSlice({
  name: 'calendar', // Un string que representa el nombre del slice. Este nombre se utiliza como prefijo para los tipos de acción generados.
  initialState: {  // Estado inicial del slice.
    events: [],
    activeEvent: null
  },
  reducers: { // Funciones reductoras que se utilizan para actualizar el estado del slice. Estas funciones se generan automáticamente a partir de los nombres de las claves del objeto reducers.
    eventAddNew: (state, action) => {
      state.events.push(action.payload)
    }
  }
})

export const {
  eventAddNew
} = calendarSlice.actions

export const calendarReducer = calendarSlice.reducer
