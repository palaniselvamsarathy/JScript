import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Form/Login'
import ClassCounter from './Components/ClassCounter'
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

    </div>
  )
}

export default App
