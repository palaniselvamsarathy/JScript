user = {
    'name':'sarathy',
    'age':25
}

console.log(user)

console.log(user.name)

console.log(user.age)

const something = (user)=>{
    const fir = user?user.name:"No name"
    return "Hello "+ fir
}

console.log(something(user))