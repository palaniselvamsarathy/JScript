import React, { Component } from 'react'

class Login extends Component {
    state = {
        email:"",
        password:""
    }
    updateHandler = (event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    submitHandler = (event)=>{
        event.preventDefault()
        // console.log(this.state)
    }
  render() {
    return (

      <div className="container mt-5">
        <pre>{JSON.stringify(this.state)}</pre>
        <div className="row">
            <div className="col-md-5">
                <div className="card">
                    <div className="card-header">
                        <form onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <input type="text" name='email' className='form-control' placeholder='Email ID' onChange={this.updateHandler}/>
                            </div>
                            <div className="form-group">
                                <input type="password" name='password' className='form-control' placeholder='Password' onChange={this.updateHandler}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className='btn btn-success' value="Login"/>
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

export default Login
