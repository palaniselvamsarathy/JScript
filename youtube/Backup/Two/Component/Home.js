import React, { useState } from 'react'

function Home() {
    let [isAvailable,setIsAvailable] = useState("yes")
    let [name,setName] = useState('')
    // function change(){
    //     setIsAvailable("no")
    // }
  return (
    <div>
      <h1>{isAvailable}</h1>
      <button onClick={()=>{
        setIsAvailable("no")
      }}>click</button>
      <br />
      Name:
      <input type="text" placeholder='enter name' onChange={(event)=>{
        setName(event.target.value)
      }} />

      <br />
      <h2>{name}</h2>
    </div>
  )
}

export default Home
