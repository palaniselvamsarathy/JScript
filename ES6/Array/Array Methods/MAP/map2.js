const users = [
    {full_name:"Ram",age:18,city:"BLR",sal:"100000"},
    {full_name:"Raj",age:19,city:"CBE",sal:"15000"},
    {full_name:"Ravi",age:22,city:"SLM",sal:"160000"},
    {full_name:"Raju",age:32,city:"MDU",sal:"1250000"},
    {full_name:"Raw",age:12,city:"CHE",sal:"10000"}
]

let eligible = users.map((user)=>({
    // name:user.full_name,
    // age:user.age,
    // city: user.city,
    // sal:user.sal,
    ...user,
    status: user.age>18?"Eligible":"Not Eligible"


}))

console.table(eligible)