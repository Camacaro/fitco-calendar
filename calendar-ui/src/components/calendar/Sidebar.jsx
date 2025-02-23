import {SidebarEvent} from "./SidebarEvent.jsx";

export const Sidebar = ({ weekendsVisible, handleWeekendsToggle, currentEvents }) => {

  return (
    <div className='demo-app-sidebar'>
      <div className='demo-app-sidebar-section'>
        <h2>Instrucciones</h2>
        <ul>
          <li>Seleccione las fechas y se le pedirá que cree un nuevo evento.</li>
          <li>Arrastrar y soltar los eventos</li>
          <li>Haga clic en un evento para eliminarlo</li>
        </ul>
      </div>
      <div className='demo-app-sidebar-section'>
        <label>
          <input
            type='checkbox'
            checked={weekendsVisible}
            onChange={handleWeekendsToggle}
          ></input>
          alternar fines de semana
        </label>
      </div>
      <div className='demo-app-sidebar-section'>
        <h2>Todos los eventos ({currentEvents.length})</h2>
        <ul>
          {currentEvents.map((event) => (
            <SidebarEvent key={event.id} event={event} />
          ))}
        </ul>
      </div>
    </div>
  )
}
