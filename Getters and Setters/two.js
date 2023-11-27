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
    },
    set fullName(name){
        const part = name.split(" ")
        this.firstName = part[0]
        this.lastName = part[1]
    }
}

person.fullName = "Shafna azmi"

console.log(person.fullName)