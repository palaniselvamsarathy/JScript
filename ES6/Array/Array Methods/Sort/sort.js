const names = ["Hey","Hi","There","Are"]

console.log(names.sort())


let numbers = [1,5,7,12,47,355,3,4,9]

let num = numbers.sort((a,b)=>{
    return a-b
})

console.log(num)
console.table(num)