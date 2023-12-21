import React from 'react'
import ComponentC from './Component/ComponentC'

export const UserContext = React.createContext()
export const channelContext = React.createContext()
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'sarathy'}>
        <channelContext.Provider value={'Hello'}>
        <ComponentC/>
        </channelContext.Provider>
        
      </UserContext.Provider>
    </div>
  )
}

export default App
