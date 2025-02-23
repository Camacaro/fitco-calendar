import { createSlice } from '@reduxjs/toolkit'
import {createEventId} from "../components/calendar/CalendarScreen.jsx";

let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

const calendarSlice = createSlice({
  name: 'calendar', // Un string que representa el nombre del slice. Este nombre se utiliza como prefijo para los tipos de acción generados.
  initialState: {  // Estado inicial del slice.
    events: [
      {
        id: createEventId(),
        title: 'All-day event',
        start: todayStr
      },
      {
        id: createEventId(),
        title: 'Timed event',
        start: todayStr + 'T12:00:00'
      }
    ],
    activeEvent: null
  },
  reducers: { // Funciones reductoras que se utilizan para actualizar el estado del slice. Estas funciones se generan automáticamente a partir de los nombres de las claves del objeto reducers.
    eventAddNew: (state, action) => {
      console.log({state, action})
      // state.events.push(action.payload)
    },
    eventSet: (state, action) => {
      state.events = action
    }
  }
})

export const {
  eventAddNew, eventSet
} = calendarSlice.actions

export const calendarReducer = calendarSlice.reducer
