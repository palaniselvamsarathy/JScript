import React,{useState} from 'react'


const Message = () => {
    // let message= "Hello"
    let [variable,setVariable]=useState("Hello")
    let gnHandler=()=>{
      setVariable("GN")
    }
  return (
    <div>
      <h2>This is Hooks Example</h2>
      <h1>Message is: {variable}</h1>
      <button onClick={()=>{
        setVariable("GM")
      }}>GM</button>
      <button onClick={gnHandler}>GN</button>
    </div>
  )
}

export default Message
