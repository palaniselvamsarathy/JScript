const users ={
    name:"SArathy",
    age:22,
    func: function(){
        console.log("This is Function")
    },
    unction(){
        console.log("Sarathy")
    },

    method:()=>{
        console.log("Hey")
    }
}
console.log(users.name)
console.log(users.func)
users.func()

users.unction()

users.method()