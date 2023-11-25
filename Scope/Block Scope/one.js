if(true){
    let blockScopeVariable = "I am a variable with block scope"
    console.log(blockScopeVariable)
}

console.log(blockScopeVariable) //reference error
// within block scope use only let and const