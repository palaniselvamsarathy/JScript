import React from 'react'

class CompB extends React.Component{
    render(){
        return <>
        <h1>This is Component B</h1>
        <pre>{JSON.stringify(this.props)}</pre>
        <div>
            <p>ID: {this.props.eid}</p>
            <p>Name: {this.props.ename}</p>
            <p>Salary: {this.props.esal}</p>
        </div>
        </>
    }
}

export default CompB