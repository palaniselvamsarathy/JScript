const user ={
    name:"Sarathy",
    Details:{
        age:12,
        address:{
            city:"Rajapalayam",
            dist:"Virudhnagar",
            state:"TamilNadu"
        }
    }
}

const {Details:{address:{city,state,dist}}} = user

console.log(city)
console.log(state)
console.log(dist)