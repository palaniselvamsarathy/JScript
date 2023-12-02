import React from 'react'

class Message extends React.Component{
    state = {
        msg : "Hello"
    }

    msgHandler = (value)=>{
        // console.log("HI")
        this.setState({msg:value})
    }
    render(){
        return <>
        <h1>This is Message Component</h1>

        <h2>My Message is:{this.state.msg}</h2>

        <button onClick={this.msgHandler.bind(this,"Good Morning")}>GM</button>
        <button onClick={this.msgHandler.bind(this,"Good AfterNoon")}>GA</button>
        {/* Without Event Handling */}
        <button onClick={()=>{
            this.setState({msg:"HEy there"})
        }}>GN</button>
        </>
    }
}

export default Message