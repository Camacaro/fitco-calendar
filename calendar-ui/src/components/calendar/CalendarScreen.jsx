import {Navbar} from "../../ui/Navbar.jsx";
import {LibraryFullCalendar} from "./LibraryFullCalendar.jsx";
import {useDispatch, useSelector} from "react-redux";

export const CalendarScreen = () => {
  const dispatch = useDispatch()
  const {  } = useSelector(state => state.calendar )


  return (
    <>
      <Navbar />
      <LibraryFullCalendar />
    </>
  )
}






