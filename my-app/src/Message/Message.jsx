import React from 'react'

class Message extends React.Component{
    msg="How Are You?"
    gmHandler=()=>{
        
        console.log("test case")
        this.msg = "Good Morning"
        console.log(this.msg)
        this.forceUpdate()
    }
    gaHandler=()=>{
        console.log("test case")
        this.msg = "Good AfterNoon"
        console.log(this.msg)
        this.forceUpdate()
    }
    gnHandler=()=>{
        console.log("test case")
        this.msg = "Good Night"
        console.log(this.msg)
        this.forceUpdate()
    }
    render(){
        return <>
        <h1>This is Message Component</h1>
        <p>Message: {this.msg}</p>
        <button onClick={this.gmHandler}>GM</button>
        <button onClick={this.gaHandler}>GA</button>
        <button onClick={this.gnHandler}>GN</button> 
        </>
    }
}

export default Message