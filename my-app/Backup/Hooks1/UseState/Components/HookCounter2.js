import React, { useState } from 'react'

function HookCounter2() {
    const init = 0
    const [count,setCount]= useState(init)
  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={()=>setCount(count+1)}>Incr</button>
    <button onClick={()=>setCount(init)}>Reset</button>
    <button onClick={()=>setCount(count-1)}>Decr</button>
    </>
  )
}

export default HookCounter2
