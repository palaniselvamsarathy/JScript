// Getters and Setters usng Object Literals

const person = {
    firstName:"Palani",
    lastName:"Selvam",
    /*
    fullName:function(){
        return this.firstName + " " + this.lastName
    }
     */
    get fullName(){
        return this.firstName + " " + this.lastName
    }
}

console.log(person)
// console.log(person.fullName()) //INstead of this

// Getters and Setters is used in Function
console.log(person.fullName)