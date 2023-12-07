import {GM,GN} from "./message.action"
let initialState = {
    message:"Hello"
}

let mesaageReducer = (state= initialState,action)=>{
    // It is going to update store/state based on action type
    switch(action.type){
        case GM:
            return {message:"Good Morning"}
        case GN:
            return {message:"Good NIght"}
        default:
            return state
    }
}

export {mesaageReducer}