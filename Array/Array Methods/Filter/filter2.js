let users = [
    {full_name:"Ram",age:18,city:"BLR",sal:"100000"},
    {full_name:"Raj",age:19,city:"CBE",sal:"15000"},
    {full_name:"Ravi",age:22,city:"SLM",sal:"160000"},
    {full_name:"Raju",age:32,city:"MDU",sal:"1250000"},
    {full_name:"Raw",age:12,city:"CHE",sal:"10000"}
]

let data = users.filter((user)=>user.age>18)
console.log(data)