const users = [{name:"Sarathy",age:25},
{name:"Shafna",age:22},
{name:"SATHISH",age:25}
]

console.log(users)

for (const user of users){
    console.log(user.name)
}

const older = users.filter(user=>user.age>22)

console.log(older)