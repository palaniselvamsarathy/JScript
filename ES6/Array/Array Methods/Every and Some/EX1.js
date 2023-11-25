let users = [
    {name:"Ram",age:18},
    {name:"Raj",age:15},
    {name:"Ravi",age:28},
    {name:"Raw",age:19}
]

function isEligible(element){
    return element.age>=18
}

let res = users.every(isEligible)
console.log(res)
let re = users.some(isEligible)
console.log(re)