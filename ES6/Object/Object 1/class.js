class Users{
    constructor(fname,job){
        this.fname = fname
        this.job = job
    }
    display(){
        console.log(this.fname)
        console.log(this.job)
    }
}

let obj = new Users("Sarathy","Developer")
console.log(obj)
obj.display()