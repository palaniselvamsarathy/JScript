import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { incrAction,decrAction } from '../Redux/Counter/counter.action'
const Counter = () => {
    let dispatch = useDispatch()
    let counter = useSelector((state)=>{
        return state.counter
    })
    let incrHandler = ()=>{
        // We have to dispatch an action
        // using useDispatch() we can dispatch the action
        dispatch(incrAction())
    }
    let decrHandler = ()=>{
        dispatch(decrAction())
    }
  return (  
    <>
    <div className="container mt-5 ml-5">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h4>Counter:{counter.counter}</h4>
                    </div>
                    <div className="card-body">
                        <button className="btn btn-primary mr-5" onClick={incrHandler}>Incr</button>
                        <button className="btn btn-success" onClick={decrHandler}>Decr</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Counter
