import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <>
      <p>This is User Component</p>
      <hr/>
      <pre>
        {JSON.stringify(this.props)}
      </pre>
      <h3>Employye 1</h3>
      <p>ID: {this.props.employees_Data[0].eid}</p>
      <p>Name: {this.props.employees_Data[0].ename}</p>
      <p>Salary: {this.props.employees_Data[0].esal}</p>

      <h3>Employee 2</h3>
      <p>ID:{this.props.employees_Data[1].eid}</p>
      <p>Name: :{this.props.employees_Data[1].ename}</p>
      <p>SAlary:{this.props.employees_Data[1].esal}</p>
      </>
    )
  }
}

export default User
