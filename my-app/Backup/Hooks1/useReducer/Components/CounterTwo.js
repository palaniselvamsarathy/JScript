import React,{useReducer} from 'react'
const initialState = 0
const reducer = (state, action)=>{
    switch(action){
        case 'Incr':
            return state + 1
        case 'Decr':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}
function CounterTwo() {
    const [count,dispatch]=useReducer(reducer, initialState)
    const [countTwo, dispatchTwo]= useReducer(reducer, initialState)
  return (
    <>
    <div>counter one - {count}</div>
    <div>
    <button onClick={()=>dispatch('Incr')}>Incr</button>
    <button onClick={()=> dispatch('Decr')}>Decr</button>
    <button onClick={()=> dispatch('reset')}>Reset</button>
    </div>
    <div>Counter Two - {countTwo}</div>
    <div>
    <button onClick={()=>dispatchTwo('Incr')}>Incr</button>
    <button onClick={()=> dispatchTwo('Decr')}>Decr</button>
    <button onClick={()=> dispatchTwo('reset')}>Reset</button>
    </div>
    </>
  )
}

export default CounterTwo
