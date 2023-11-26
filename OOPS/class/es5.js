// ES5 Example

function Person(f_name){
    this.f_name = f_name
}

Person.prototype.sayHello = function (){
    console.log("My Name is "+ this.f_name)
}


var person = new Person("Sarathy")

person.sayHello()