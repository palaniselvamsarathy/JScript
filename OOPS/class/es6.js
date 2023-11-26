class Person{
    constructor(user_name,age){
        this.user_name = user_name
        this.age = age
    }

    display(){
        console.log("My Name is "+this.user_name)
    }
}

let person  = new Person("Sarathy",22)

person.display()