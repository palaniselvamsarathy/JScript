import { useRef } from "react"

let Login = ()=>{
    let buttonRef = useRef(null)
    let submitHandler = (event)=>{
        console.log(buttonRef.current)
        event.preventDefault()
        buttonRef.current.disabled = false
    }
    return <>
    <h1>Login Component</h1>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-5">
                <form action="">
                    <div className="form-group">
                       <input type="text" name="" id="" className="form-control" />    
                    </div>
                    <div className="form-group">
                       <input type="text" name="" id="" className="form-control" />    
                    </div>
                    <div className="form-check">
                        <input type="checkbox" onChange={submitHandler} className="form-check-input"></input>
                        Terms & Conditions
                    </div>
                    <div className="form-group">
                    <input type="submit" ref={buttonRef} value="Login" id="" className="btn btn-primary" disabled />
                    </div>
                </form>
                
            </div>
        </div>
    </div>
    
    </>
}

export default Login