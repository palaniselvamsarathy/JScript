import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Message from './HooksEx/Message'
import Counter from './HooksEx/Counter'
const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/useState" element={<Message/>}/>
          <Route path='/product' element={<Counter/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
