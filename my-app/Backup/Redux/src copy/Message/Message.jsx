import React from 'react'
import { gmAction,gnAction } from '../Redux/Message/message.action'
import {useDispatch,useSelector} from 'react-redux'
function Message() {
    let dispatch = useDispatch()
    let message = useSelector((state)=>{
        return state.message
    })
    let gmHandler=()=>{
        // DISPATCH AN ACTION
        dispatch(gmAction())
    }
    let gnHandler=()=>{
        dispatch(gnAction())
    }
  return (
      <div className="container mt-5 ml-5">
        <pre>{JSON.stringify(message)}</pre>
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h1>Message:{message}</h1>
                    </div>
                    <div className="card-body">
                        <button className="btn btn-primary" onClick={gmHandler}>GM</button>
                        <button className="btn btn-success mr-5" onClick={gnHandler}>GN</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Message
