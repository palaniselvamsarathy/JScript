// Map in JS

// map is used to access every elements and do some change or update some elements

const number =[1,2,3,4,5,6,7,8,9,10]

// parameter - map(value ,index ,array)
let square = number.map((value)=>{
    return Math.sqrt(value).toFixed(2)
})

console.log(square)
console.table(square)