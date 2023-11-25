// Extracting properties from an array of objects
const users = [
    {full_name:"Ram",age:18,city:"BLR",sal:"100000"},
    {full_name:"Raj",age:19,city:"CBE",sal:"15000"},
    {full_name:"Ravi",age:22,city:"SLM",sal:"160000"},
    {full_name:"Raju",age:32,city:"MDU",sal:"1250000"},
    {full_name:"Raw",age:12,city:"CHE",sal:"10000"}
]

// const names = users.map(user=>user.full_name)
const names = users.map(user=>user.age)
console.log(names)

const updated = users.map((user)=>{
    return {
        full_name:user.full_name,
        age:user.age+1
    }
})

console.log(updated)