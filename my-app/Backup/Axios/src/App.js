import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './Dummy/Home'
import Service from './Dummy/Service'
import Contact from './Dummy/Contact'
import User from './User/User'
const App = () => {
  return (
    <div>
        <Router>
      <Navbar/>
      <h1>This is Example for Axios</h1>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App
