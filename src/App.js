import { Route, Routes } from 'react-router-dom';
import Froute from './Routes/Froute.js'
import StopWatch from './StopWatch/Watch.js'

function App(){

  return <>
      <Routes>
            <Route path="/watch" element={<StopWatch/>} />
      </Routes>
  </>
}

export default App;