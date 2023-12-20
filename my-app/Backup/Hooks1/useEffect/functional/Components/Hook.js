import React, { Component } from 'react'


class Hook extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:0,
            name:""
        }
    }
    componentDidMount(){
        document.title = `You clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps,prevState){
        
        if(prevState.count !== this.state.count){
          console.log("Updating Document Title")
        }
        document.title = `You clicked ${this.state.count} times`
    }
  render() {
    return (
      <div>
        <h1>Hey There</h1>
        <input type="text" value={this.state.name} onChange={e=>this.setState({name: e.target.value})} />
        <br /><br />
        <button onClick={()=>this.setState({count: this.state.count +1})}
        >Click {this.state.count} times</button>
        <pre>{JSON.stringify(this.state)}</pre>
      </div>
    )
  }
}

export default Hook
