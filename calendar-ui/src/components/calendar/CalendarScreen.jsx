import {Navbar} from "../../ui/Navbar.jsx";
import {LibraryFullCalendar} from "./LibraryFullCalendar.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {eventStartLoading} from "../../actions/calendar.js";

export const CalendarScreen = () => {
  const dispatch = useDispatch()
  const { uuid } = useSelector(state => state.auth )
  const { events, loadingInitialState } = useSelector(state => state.calendar )

  useEffect(() => {
    dispatch( eventStartLoading(uuid) )
  }, [dispatch]);

  // TODO: add a loading
  return (
    <>
      <Navbar />
      {!loadingInitialState && <LibraryFullCalendar initialEvents={events} />}
    </>
  )
}






