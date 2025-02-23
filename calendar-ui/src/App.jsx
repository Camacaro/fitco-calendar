import {Provider} from "react-redux";

import {store} from "./store/store.js";

function App() {

  return (
    <Provider store={ store }>
      <h1>Hola mundo</h1>
    </Provider>
  )
}

export default App
