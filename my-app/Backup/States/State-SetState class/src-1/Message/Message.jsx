import React from 'react'

class Message extends React.Component{
    state = {
        msg:"How Are You?"
    }
    gmHandler = ()=>{
        this.setState({msg:"Good Morning"})
    }
    gaHandler=()=>{
        this.setState({msg:"Good After Noon"})
    } 
    gnHandler=()=>{
        this.setState({msg:"Good Night"})
    }
    render(){
        return <>
        <h1>This is Message Component</h1>
        <p>Message: {this.state.msg}</p>
        <button onClick={this.gmHandler}>GM</button>
        <button onClick={this.gaHandler}>GA</button>
        <button onClick={this.gnHandler}>GN</button> 
        </>
    }
}

export default Message