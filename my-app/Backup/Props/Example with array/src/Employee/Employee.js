import React, { Component } from 'react'
import User from '../User/USer'

class Employee extends Component {
  Empl= [
    {eid:100,ename:"Sarathy",esal:45000},
    {eid:101,ename:"Sathish",esal:55000}
  ]
  render() {
    return (
      <>
      <h1>This is Employee Component</h1>

      <hr/>
      <hr/>
      <User employees_Data={this.Empl}/>
      </>
    )
  }
}

export default Employee
