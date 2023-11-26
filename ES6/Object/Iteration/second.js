let user = {
    name:"Sarathy",
    age:12,
    job:"Developer"
}

// for(let key in user){
//     console.log (`${key} : ${user[key]}`)
// }
const keys = Object.keys(user)

keys.forEach(key=>{
    console.log (`${key} : ${user[key]}`)

})
const values = Object.values(user)

values.forEach(value=>{
    console.log (`${value}`)

})