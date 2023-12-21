import React,{useReducer} from 'react'
import ComponentA from './Component/ComponentA'
import ComponentB from './Component/ComponentB'
import ComponentC from './Component/ComponentC'

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action)=>{
    switch(action){
        case 'Incr':
            return state +1
        case 'Decr':
            return state -1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App() {
  const [count,dispatch]= useReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
    <div className="App">
      <h1>App Component</h1>
      <h4>Count :::: {count}</h4>
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
    </CountContext.Provider>
  )
}

export default App
