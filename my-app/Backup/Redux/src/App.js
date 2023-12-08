import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Message from './Message/Message'
import { Provider } from 'react-redux'
import { store } from './Redux/store'
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/message" element={<Message/>}/>
            {/* <Route path='/product' element={<Counter/>} /> */}
          </Routes>
        </Router>
      </Provider>
    </div>
  )
}

export default App
