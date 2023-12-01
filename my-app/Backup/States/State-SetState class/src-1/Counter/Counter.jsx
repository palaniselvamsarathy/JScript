import React  from "react";

class Counter extends React.Component{
    state = {
        qty:1
    }

    decrHandler = ()=>{
        if(this.state.qty===1){
            return this.state.qty
        }
        this.setState({qty:this.state.qty-1})
        
    }

    incrHandler = ()=>{
        this.setState({qty:this.state.qty+1})
    }

    render(){
        return <>
        <h1>This is Counter Component</h1>
        <pre>{JSON.stringify(this.state)}</pre>
{/* Without Bootstrap */}

        <button onClick={this.decrHandler}>Decr</button>
        <button onClick={this.incrHandler}>Incr</button>

{/* Without Bootstrap */}
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                        <pre>{JSON.stringify(this.state)}</pre>
                        </div>
                        <div className="card-body">
                            <button className="btn btn-success" onClick={this.decrHandler}>Decr</button>
                            <button className="btn btn-primary" onClick={this.incrHandler}>Incr</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    }
}

export default Counter