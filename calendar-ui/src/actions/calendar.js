import Swal from "sweetalert2";

import {fetchWithToken} from "../services/http.js";
import {eventSet, loadingInitialState, eventAddNew} from "../reducers/calendarReducer.js";

const formatDate = (date) => {
  return new Date(date).toISOString().replace(/T.*$/, '')
}

const formatEvent = (event) => {
  return {
    id: event.uuid,
    title: event.title,
    start: formatDate(event.startDate)
  }
}

const formatEvents = (events) => {
  const e = []
  for (let i = 0; i < events.length; i++) {
    e.push(formatEvent(events[i]))
  }
  return e
}

export const eventStartLoading = (userId) => {
  return async (dispatch) => {
    try {
      dispatch( loadingInitialState(true) )
      const response = await fetchWithToken(`api/events/users/${userId}`, null)
      const body = await response.json();
      const events = formatEvents(body)
      dispatch( eventSet(events) )
    } catch (e) {
      console.log(e)
    } finally {
      dispatch( loadingInitialState(false) )
    }
  }
}

export const eventAddNewOne = (event) => {
  return async (dispatch) => {
    try {
      const payload = {
        title: event.title,
        notes: event.notes,
        start_date: event.startDate,
        end_date: event.endDate,
        user_id: event.userId,
      }
      const response = await fetchWithToken(`api/events`, payload, 'POST')
      const body = await response.json();

      if(!body.uuid) {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un error al guardar el evento',
          icon: 'error'
        });
        return
      }

      const e = formatEvent(body)
      dispatch( eventAddNew(e) )

      Swal.fire({
        title: 'Evento',
        text: 'El evento a sido guardado',
        icon: 'success'
      });

      return e
    } catch (e) {
      console.log(e)
    }
  }
}
