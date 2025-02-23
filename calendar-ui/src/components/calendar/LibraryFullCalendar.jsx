
import {useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import {Sidebar} from "./Sidebar.jsx";
import {RenderEventContent} from "./RenderEventContent.jsx";

import './calendar.css'
import {useDispatch, useSelector} from "react-redux";
import {eventAddNewOne} from "../../actions/calendar.js";

let eventGuid = 0

export function createEventId() {
  return String(eventGuid++)
}

export const LibraryFullCalendar = ({ initialEvents }) => {
  const dispatch = useDispatch()
  const { uuid } = useSelector(state => state.auth )
  const [weekendsVisible, setWeekendsVisible] = useState(true)
  const [currentEvents, setCurrentEvents] = useState([])

  function handleWeekendsToggle() {
    setWeekendsVisible(!weekendsVisible)
  }

  async function handleDateSelect(selectInfo) {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      const eventToSend = {
        title: title,
        notes: "mi nota personal", // TODO: change this
        startDate: new Date(selectInfo.startStr),
        endDate: new Date(selectInfo.endStr),
        userId: uuid
      }

      const eventSaved = await dispatch( eventAddNewOne(eventToSend) )
      if (!eventSaved.id) return

      calendarApi.addEvent({
        id: eventSaved.id,
        title: eventSaved.title,
        start: eventSaved.start,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        notes: "",
      })
    }
  }

  function handleEventClick(clickInfo) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  function handleEvents(events) {
    setCurrentEvents(events)
  }

  const handleEventAdd = async (e) => {
    const event = {
      title: e.event.title,
      notes: e.event.extendedProps.notes,
      startDate: new Date(e.event.start),
      endDate: new Date(e.event.end),
      userId: uuid
    }

    // const my = await dispatch( eventAddNewOne(event) )
    // console.log({my})

    console.log('handleEventAdd', e)
  }

  const handleEventChange = (e) => {
    console.log('handleEventChange', e)
  }

  const handleEventRemove= (e) => {
    console.log('handleEventRemove', e)
  }

  return (
    <div className='demo-app'>
      <Sidebar
        weekendsVisible={weekendsVisible}
        handleWeekendsToggle={handleWeekendsToggle}
        currentEvents={currentEvents}
      />
      <div className='demo-app-main'>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          initialEvents={initialEvents} // alternatively, use the `events` setting to fetch from a feed
          select={handleDateSelect}
          eventContent={RenderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          eventAdd={handleEventAdd}
          eventChange={handleEventChange}
          eventRemove={handleEventRemove}
        />
      </div>
    </div>
  )
}






