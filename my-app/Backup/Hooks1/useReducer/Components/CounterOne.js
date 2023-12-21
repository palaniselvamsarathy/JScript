import React,{useReducer} from 'react'
const initialState = {
    firstCounter:0,
    secondCounter: 10
}
const reducer = (state, action)=>{
    switch(action.type){
        case 'Incr':
            return {...state, firstCounter:state.firstCounter +action.value}
        case 'Decr':
            return {...state,firstCounter:state.firstCounter -action.value}
        case 'Incr2':
            return {...state,secondCounter:state.secondCounter +action.value}
        case 'Decr2':
            return {...state,secondCounter:state.secondCounter -action.value}
            
        
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
    <div>counter one - {count.firstCounter}</div>
    <div>counter two - {count.secondCounter}</div>
    <button onClick={()=>dispatch({type: 'Incr', value:1})}>Incr</button>
    <button onClick={()=> dispatch({type: 'Decr', value:1})}>Decr</button>
    <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
    <button onClick={()=>dispatch({type: 'Incr', value:5})}>Incr5</button>
    <button onClick={()=> dispatch({type: 'Decr', value:5})}>Decr5</button>

    <button onClick={()=>dispatch({type: 'Incr2', value:2})}>IncrCount2</button>
    <button onClick={()=> dispatch({type: 'Decr2', value:2})}>DecrCount2</button>
    </>
  )
}

export default CounterOne
