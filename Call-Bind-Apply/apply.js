let sub = [25,35]

function total(mat,eng){
    console.log(this.user_name + " got "+(eng+mat)+" marks")
}

let stud = {
    user_name:"Sarathy"
}

total.apply(stud,sub)