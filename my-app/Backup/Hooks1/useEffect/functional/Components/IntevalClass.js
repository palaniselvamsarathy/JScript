import React, { Component } from 'react'

class IntevalClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }
    componentDidMount(){
        this.interval = setInterval(this.tick, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }

    tick = ()=>{
        this.setState({
            count: this.state.count +1
        })
    }
  render() {
    return (
      <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Hi, I'm Sarathy</h1>
                    <h1>{this.state.count}</h1>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default IntevalClass
