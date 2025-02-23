import {configureStore} from "@reduxjs/toolkit";

import {calendarReducer} from "../reducers/calendarReducer.js";

export const store = configureStore({
  reducer: {
    calendar: calendarReducer
  }
})
