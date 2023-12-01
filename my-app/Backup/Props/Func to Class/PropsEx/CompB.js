import React from 'react'

class CompB extends React.Component{
    render(){
        return <>
        <h1>This is Component B - Class</h1>
        <pre>{JSON.stringify(this.props)}</pre>

        <p>ID: {this.props.id}</p>
        <p>Name: {this.props.Name}</p>
        <p>Salary: {this.props.Salary}</p>
        <p>City: {this.props.City}</p>
        </>
    }
}

export default CompB