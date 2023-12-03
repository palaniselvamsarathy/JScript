import React, { Component } from 'react'
class Employee extends Component {
  constructor(props){
    console.log("First Consturctor will be Executed")
    super(props)
    this.state={
      // sal:25000,
      currentTime: new Date().toLocaleTimeString()
    }
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({currentTime:new Date().toLocaleTimeString()})
    },1000)
    console.log("Third Execution - Component Did Mount")
    console.log("Without Our intension. Once our Component is fully executed")
  }
  render() {
        console.log("Render is second")
    return (
      <>
      <h1>Employee Component</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3>Time - - {this.state.currentTime}</h3>
              </div>
              <div className="card-body"></div>
            </div>  
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Employee
