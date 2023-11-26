var age = 45
const stud = {
    age:25,
    func1:function(){
        console.log("Func 1:",this.age)
        console.log("Func 1:",this)
        // console.log("Func 1:",this.age)
        // Only if it is Fat Arrow Function this represents the data you need
        // Means it takes the entire scope of student
        const func2=()=>{
            console.log("Func 2:",this.age)
            console.log("Func 2:",this)
        }
        func2()
    }

}

stud.func1()