import React,{useReducer} from 'react'
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
function CounterOne() {
    const [count,dispatch]=useReducer(reducer, initialState)
  return (
    <>
    <div>count - {count}</div>
    <button onClick={()=>dispatch('Incr')}>Incr</button>
    <button onClick={()=> dispatch('Decr')}>Decr</button>
    <button onClick={()=> dispatch('reset')}>Reset</button>
    </>
  )
}

export default CounterOne
