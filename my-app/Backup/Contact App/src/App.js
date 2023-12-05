import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Index from './Home/Index'
import ContactApp from './Contact/ContactApp'
const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/contact" element={<ContactApp/>}/>
          <Route path='/index' element={<Index/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
