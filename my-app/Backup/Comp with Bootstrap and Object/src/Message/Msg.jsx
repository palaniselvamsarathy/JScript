import React, { Component } from 'react'

class Msg extends Component {
    name="Sarathy"
    message ="Good Morning"
  render() {
    return (
      <div>
        <h1>Message:{this.message}</h1>
        <hr/>
        <h1>Name:{this.name}</h1>
      </div>
    )
  }
}

export default Msg
