let user = {
    name:"Sarathy",
    age:35,
    city:"Bangalore"
}

let user_keys = Object.keys(user)

console.log(user_keys)
console.table(user_keys)

let user_values = Object.values(user)

console.table(user_values)

for(let i=0;i<user_keys.length;i++){
    // console.log(user_keys[i]+":"+user_values[i])
    console.table(user_keys[i]+":"+user_values[i])
}