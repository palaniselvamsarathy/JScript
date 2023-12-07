import React from 'react'
import { gmAction,gnAction } from '../Redux/Message/message.action'
import {useDispatch} from 'react-redux'
function Message() {
    let dispatch = useDispatch()
    let gmHandler=()=>{
        // DISPATCH AN ACTION
        dispatch(gmAction())
    }
    let gnHandler=()=>{
        dispatch(gnAction())
    }
  return (
      <div className="conatiner mt-5 ml-5">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h1>Message:{"Hello"}</h1>
                    </div>
                    <div className="card-body">
                        <button className="btn btn-primary" onClick={gmHandler}>GM</button>
                        <button className="btn btn-success" onClick={gnHandler}>GN</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Message
