class Person{
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    get fullName(){
        return this.firstName + " " + this.lastName
    }
    set fullName(name){
        const part = name.split(" ")
        this.firstName = part[0]
        this.lastName = part[1]
    }
}

const p1 = new Person("Shafna","Azmi")

console.log(p1.fullName)

p1.fullName = "Palani Selvam"

console.log(p1.fullName)