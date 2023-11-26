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
console.table(stud)

console.log(stud.about())

console.log(stud.eligiblity())