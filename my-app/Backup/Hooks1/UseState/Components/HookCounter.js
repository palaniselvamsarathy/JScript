import React,{useState} from 'react'

function HookCounter() {

    const [count,setCount] = useState(0)
  return (
    <>

    <h1>HEy there</h1>
    <button onClick={()=>setCount(count+1)} > Count {count}</button>
    </>
  )
}

export default HookCounter
