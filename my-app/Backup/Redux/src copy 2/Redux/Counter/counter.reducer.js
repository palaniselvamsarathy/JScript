// What is Reducer?

/*
Reducer is a Pure Function - no side effects
It will take two Arguments-> State, Action
It will update redux store/state based on action type

*/
import { INCR,DECR } from "./counter.action"
let initialState= {counter:10}
let counterReducer = (state=initialState,action)=>{
    console.log(action.payload)
    console.log(action.type)
    switch(action.type){
        case INCR:
            return {counter:state.counter+1 , herione: action.payload}
        case DECR:
            return {counter:state.counter-1 , herione :action.payload}
        default:
            return state
    }
}

export {counterReducer}