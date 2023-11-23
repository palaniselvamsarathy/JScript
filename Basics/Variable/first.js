/*
var
let 
const
*/ 

// Difference

// 1.Scope

// var -can accessed anywhere inside the scope or outside the scope
// let - can be accessed within the scope
// const - its same as let
if(true){
    // var msg = "Hello"
    let msg = "Hello"
    // const msg = "Hello"

    console.log(msg)
}

// console.log(msg)


// 2.Variable Declaration
/* 
var- redeclaration is allowed
let - redeclaration is not allowed
const - redeclaration is not allowed 
*/
var a = 25;
console.log(a)
var a = 40
console.log(a)

// 3.Value Assignment

// var,let - We can re assign the value
// const- cannot be reassigned

var a= 20
console.log(a)
a = 400
console.log(a)

let b = 10
console.log(b)
b= 12
console.log(b)

// if we want to change the const value
// we can't change the value of normal variable but we can change the object of const value

const student = {"name":"Sarathy","age":18}
student.name = "Shafna"
console.table(student)