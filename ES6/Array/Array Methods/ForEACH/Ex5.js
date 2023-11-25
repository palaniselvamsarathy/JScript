let numbers=[1,2,3,4,5,6,7,8,9,10]

let even =[]

numbers.forEach((number)=>{
    if(number%2==0){
        even.push(number)
    }
})

console.log(even)