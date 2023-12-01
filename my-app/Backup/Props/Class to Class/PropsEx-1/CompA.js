import React from 'react'
import CompB from './CompB'
class CompA extends React.Component {
    
    eid=101
    ename="Sarathy"
    esal= 50000
    render() {
        return (
      <div>
        <h1>This is Component A</h1>
        <hr/>
        <CompB eid={this.eid} ename={this.ename} esal={this.esal} />
      </div>
    )
  }
}

export default CompA
