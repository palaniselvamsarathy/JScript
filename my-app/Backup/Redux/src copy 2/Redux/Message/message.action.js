const GM = "GM"
const GN = "GN"

let gmAction = ()=>{
    return {type:GM}
}

let gnAction = ()=>{
    return {type:GN}
}
// What is Action?

// Action is a function that return actionable object

export {GM,GN,gmAction,gnAction} 
// Exporting as named export