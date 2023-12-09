// What is redux Action

/*
Action is a function that returns Actionable object
It returns object/actionable object
It contains type and payload

Atlast WE have to export
*/
let INCR = "INCR"
let DECR = "DECR"
let incrAction = ()=>{
    console.log("INcrement Action")
    return {type:INCR, payload:"Samantha"}
}
let decrAction = ()=>{
    console.log("Decrement Action")
    return {type:DECR, payload:"Hansika"}
}

export {incrAction,decrAction,INCR,DECR}