import React from 'react'
import useCounter from '../Hooks/useCounter'
function CounterTwo() {
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

export default CounterTwo
