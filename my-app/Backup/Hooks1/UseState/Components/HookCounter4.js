import React, { useState } from 'react'
// Array
function HookCounter4() {
    const [arr,setArr] = useState([])
    const addItem = ()=>{
        setArr([...arr, {
            id:arr.length,
            value: Math.floor(Math.random()*10) +1
        }])
    }
  return (
    <div>
        <button onClick={addItem}>Add a Number</button>
      <ul>{
        arr.map(item => 
            <li key={item.id}>{item.value}</li>
        )
        }
      </ul>
    </div>
  )
}

export default HookCounter4
