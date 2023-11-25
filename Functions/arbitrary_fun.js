// Function with Arbitrary Arguments

function sum(){
    let  total = 0
    for(let i=0;i<arguments.length;i++){
        total+=arguments[i]
    }
    return total
}

console.log(sum(12,24))

console.log(sum(12,24,2,10))

// instead of this we can use spread operator