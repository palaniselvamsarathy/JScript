import React, { Component } from 'react'

class Login extends Component {
    state = {
        email:"",
        password:""
    }
    emailHandler =(event)=>{
        this.setState({email:event.target.value})
    }
    passwordHandler = (event)=>{
        this.setState({password:event.target.value})
    }
    submitHandler = (event)=>{
        event.preventDefault()
        console.log(this.state)
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
                                <input type="text" className='form-control' placeholder='Email ID' onChange={this.emailHandler}/>
                            </div>
                            <div className="form-group">
                                <input type="password" className='form-control' placeholder='Password' onChange={this.passwordHandler}/>
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
