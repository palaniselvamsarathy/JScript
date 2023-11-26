function joes(){
    console.log(this)
}
joes()

console.log(joes.name)
console.log(joes.toString())

joes.call()



function welcome(){
    console.log("Welcome:"+this.uname)
}

// welcome()
const stud = {
    uname:"Sarathy"
}

welcome.call(stud)