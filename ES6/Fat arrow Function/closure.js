let createCounter = ()=>{
    let count = 2
    return ()=>{
        count++;
        return count
    }
}

let counter = createCounter()

console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())