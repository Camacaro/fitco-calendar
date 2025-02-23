import {fetchWithToken} from "../services/http.js";
import {eventSet, loadingInitialState} from "../reducers/calendarReducer.js";

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
