import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props){
        super(props)

        this.state={
            count:0
        }
    }

    incrCount=()=>{
        this.setState({
            count:this.state.count +1
        })
    }
  render() {
    return (
      <div>
        <h1 className='text-center'>This is Hooks class Example</h1>
        <h4 className='text-center'>{this.state.count}</h4>
        <button className='text-center ml-5'  onClick={this.incrCount} >Incr</button>
      </div>
    )
  }
}

export default ClassCounter
