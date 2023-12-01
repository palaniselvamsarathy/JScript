import React from "react";
import CompB from "./CompB";

class CompA extends React.Component{
    eid=101
    ename="Sarathy"
    render(){
        return <>
        <h1>This is Component A - Class</h1>
        <hr/>
        <CompB id={this.eid} name={this.ename} />
        </>
    }
}

export default CompA