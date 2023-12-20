import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router,Routes} from 'react-router-dom'
// import Hookone from './Components/Hookone'
// import Hook from './Components/Hook'
// import HookMouse from './Components/HookMouse'
import MouseContainer from './Components/MouseContainer'
const App = () => {
  return (
    <div>

        <Router>
          <Navbar/>
          <Routes>
            {/* <Route path="/digital" element={<Digital/>}/>
            <Route path="/message" element={<Message/>}/>
            <Route path="/counter" element={<Counter/>}/> */}
            {/* <Route path='/product' element={<Counter/>} /> */}
            {/* <Route path='/form' element={<Login/>} /> */}
            {/* <Route path="/hooks" element={<ClassCounter/>}/> */}
          </Routes>
        </Router>
            {/* <Hook/> */}
            {/* <Hookone/> */}
            {/* <HookMouse/> */}
            <MouseContainer/>
    </div>
  )
}

export default App
