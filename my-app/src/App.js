import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Form/Login'
import ClassCounter from './Components/ClassCounter'
// import HookCounter from './Components/HookCounter'
// import HookCounter2 from './Components/HookCounter2'
// import HookCounter3 from './Components/HookCounter3'
import HookCounter4 from './Components/HookCounter4'
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
            <Route path='/form' element={<Login/>} />
            <Route path="/hooks" element={<ClassCounter/>}/>
          </Routes>
        </Router>

        {/* <HookCounter/> */}
        <HookCounter4/>

    </div>
  )
}

export default App
