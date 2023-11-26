const users = [
    {
        name:'Sarathy',
        address:{
            city:"Chennai",
            state:"TamilNadu",
            country:"India"
        }
    },
    {
        name:"Shafna",
        address:{
            city:"Cbe",
            state:"TamilNadu",
            country:"India"
        }
    }
]

const [/*{name:name1,address:{city:city1,state:state1}}*/,
    {name:name2,address:{city:city2,state:state2}}]= users

    // console.log(name1)
    console.log(name2)
    // console.log(state1)
    console.log(state2)