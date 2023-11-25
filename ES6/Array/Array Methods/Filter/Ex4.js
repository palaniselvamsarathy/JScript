let users = [
    {full_name:"Ram",age:18,city:"BLR",sal:"100000"},
    {full_name:"Raj",age:19,city:"CBE",sal:"15000"},
    {full_name:"Ravi",age:22,city:"SLM",sal:"160000"},
    {full_name:"Raju",age:32,city:"MDU",sal:"1250000"},
    {full_name:"Raw",age:12,city:"CHE",sal:"10000"}
]

// let expense = users.filter((user)=>user.sal<20000 && user.age>18)

// console.log(expense)

let expense = users.filter((user)=>user.sal<20000 || user.age>18)

console.log(expense)