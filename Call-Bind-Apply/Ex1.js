const person = {
    f_nmae:"Palani",
    l_name:"Selvam",
    full_name:function(){
        return this.f_nmae+ " " +this.l_name
    }
}

console.log(person.full_name())

const another = {
    f_nmae:"Shafna",
    l_name:"Azmi"
}

console.log(person.full_name.call(another))