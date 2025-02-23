import {configureStore} from "@reduxjs/toolkit";

import {calendarReducer} from "../reducers/calendarReducer.js";
import {authReducer} from "../reducers/authReducer.js";

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    auth: authReducer,
  }
})
