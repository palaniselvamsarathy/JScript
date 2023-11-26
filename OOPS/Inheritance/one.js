class Person{
    constructor(user_name,age){
        this.user_name = user_name
        this.age = age
    }

    display(){
        console.log("My Name is "+this.user_name)
    }
}

class Student extends Person{
    constructor(user_name,age,city){
        super(user_name,age)
        this.city = city
    }

    print(){
        console.log("My name is "+this.user_name+" and My age is :"+this.age+"from "+this.city)
    }
}

var stud = new Student("SArathy",11,"CBE")

stud.print()
stud.display()