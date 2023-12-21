
import React from 'react'
import { useContext } from 'react'
import { CountContext } from '../App'
function ComponentF() {
    const countContext = useContext(CountContext)
  return (
    <div>
        <h1>Comp F[E]</h1>
        <button onClick={()=>countContext.countDispatch('Incr')}>Incr</button>
        <button onClick={()=> countContext.countDispatch('Decr')}>Decr</button>
        <button onClick={()=> countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentF
