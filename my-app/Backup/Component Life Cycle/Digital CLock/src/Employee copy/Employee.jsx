import React, { Component } from 'react'

class Employee extends Component {

    state = {
        salary:10000
    }

    hikeHandler = (value)=>{
        if(value===0){
            this.setState({salary:this.state.salary})
        }
        this.setState({salary:this.state.salary+value})
    }
  render() {

    return (
      <>
      <h1>This is Employee Component</h1>

      <h2>Number i: {this.state.salary}</h2>
        <button onClick={this.hikeHandler.bind(this,50000)}>HIke 50K</button>
        <button onClick={this.hikeHandler.bind(this,100000)}>HIke 100K</button>
        <button onClick={this.hikeHandler.bind(this,0)}>HIke 0</button>
      </>
    )
  }
}

export default Employee
