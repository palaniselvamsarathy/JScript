// Create usng object.create() method

// object.create(prototype,propertiesobject)


const userProto = {
    sayHello:function(){
        return "Hello"
    }
}

const user = Object.create(userProto)

user.name = "Sarathy"
user.age = 25

console.log(user)

console.log(user.sayHello())