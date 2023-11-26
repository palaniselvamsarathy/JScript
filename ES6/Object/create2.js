const stud = {
    name:"Sarathy",
    age:22,
    city :"Bangalore",
    address:"Marathahalli",
    about: function(){
        return `${this.name} is from ${this.age}`
    },
    eligiblity:function(){
        return this.age >=18
    }
}

console.log(stud)
function addStud(name,age,city,address){
    const user = {}
    user.name = name
    user.age = age
    user.city = city
    user.address = address
    user.about = function(){
        return `${this.name} is from ${this.city}`
    }
    user.eligiblity = function(){
        return this.age>=18
    }
    return user
}

userrs = addStud("Shafna","22","CBE","MTP")

console.log(userrs)