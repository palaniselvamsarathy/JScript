import React  from "react";

class Login extends React.Component{
    state = {
        email:"",
        password:""
    }
    emailHandler=(event)=>{
        // console.log("Email")
        this.setState({email:event.target.value})
    }
    passHandler = (event)=>{
        // console.log("Password")
        this.setState({password:event.target.value})
    }
    submitHandler = (event)=>{
        event.preventDefault()
        console.log(this.state)
    }
    render(){
        return <>
        <h1>This is Form Login Component</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.submitHandler}>
            <label htmlFor="" >Email:</label>
            <input type="text" placeholder="xyz@gmail.com" onChange={this.emailHandler}/>
            <label htmlFor="" >Password:</label>
            <input type="password" onChange={this.passHandler}/>
            <input type="submit" value="Login"/>
        </form>
        </>
    }
}

export default Login