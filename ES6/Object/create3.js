const smethod = {
    about:function(){
    return `${this.name} is from ${this.city}`
},
    eligiblity:function(){
    return this.age>=18
}
}
function addStud(name,age,city,address){
    const user = Object.create(smethod)
    user.name = name
    user.age = age
    user.city = city
    user.address = address


    return user
}

// console.log(this.user.about)

userrs = addStud("Shafna","22","CBE","MTP")

console.log(userrs)

console.log(addStud("Sathish",25,"CBE","SLM"))