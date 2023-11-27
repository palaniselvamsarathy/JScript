class Myclass{

    static myStaticProperty = "Sarathy"

    static myStaticMethod(){
        console.log("This is Static Method")
    }
}

Myclass.myStaticMethod()
console.log(Myclass.myStaticProperty)

// Static method is called using the class name
// We can use the class name instead of object creation