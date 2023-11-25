// Calculate Average using foreach

const numbers = [1,2,3,4,5]
let total=0
let avg=0
numbers.forEach((number)=>{
    total+=number
    avg=total/numbers.length
})

console.log(avg)