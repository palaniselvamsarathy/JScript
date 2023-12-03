import React, { Component } from 'react'

class Registeration extends Component {
    state  = {
        username:"",
        email:"",
        password:""
    }
    updateHandler = (event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    submitHandler = (event) =>{
        event.preventDefault()
        console.log(this.state)
    }
  render() {
    return (
      <div className="container">
        <pre>{JSON.stringify (this.state)}</pre>
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <form onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <input type="text" name="username" onChange={this.updateHandler}/>
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" onChange={this.updateHandler}/>
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" onChange={this.updateHandler}/>
                            </div>
                            <div className="form-group">
                                <input type="submit" className='btn btn-success' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Registeration
