import React from 'react'
import useCounter from '../Hooks/useCounter'

function CounterOne() {
    const [count,incr,decr,reset] = useCounter()
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={incr}>Incr</button>
      <button onClick={decr}>Decr</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterOne
