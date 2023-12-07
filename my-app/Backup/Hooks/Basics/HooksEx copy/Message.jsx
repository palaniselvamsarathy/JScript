import React,{useState} from 'react'


const Message = () => {
    // let message= "Hello"
    let [variable,setVariable]=useState({message:"Hello"})
    let gnHandler=()=>{
      setVariable({message:"Good Night"})
    }
  return (
    <div>
      <h2>This is Hooks Example</h2>
      <h1>Message is: {variable.message}</h1>
      <button onClick={()=>{
        setVariable({message:"Good Morning"})
      }}>GM</button>
      <button onClick={gnHandler}>GN</button>
    </div>
  )
}

export default Message
