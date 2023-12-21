import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router,Routes} from 'react-router-dom'
import ComponentC from './Component/ComponentC'

const UserContext = React.createContext()

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
        <UserContext.Provider value={'sarathy'}>
        <ComponentC/>
        </UserContext.Provider>
    </div>
  )
}

export default App
