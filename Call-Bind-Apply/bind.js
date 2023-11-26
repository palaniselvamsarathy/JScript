function total(mat,eng){
    console.log(this.user_name + " got "+(eng+mat)+" marks")
}

let stud = {
    user_name:"Sarathy"
}
const fun = total.bind(stud,85,95)

console.log(fun)
fun()