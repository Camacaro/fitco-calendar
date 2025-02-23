import {Provider} from "react-redux";

import {store} from "./store/store.js";
import {CalendarScreen} from "./components/calendar/CalendarScreen.jsx";

function App() {

  return (
    <Provider store={ store }>
      <CalendarScreen />
    </Provider>
  )
}

export default App
