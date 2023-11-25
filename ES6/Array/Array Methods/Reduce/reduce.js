//  Reduce in JS

/*
array.reduce(function(accumulator,currentvalue,currentINdex,array){

},initialValue)
*/

let numbers = [1,2,3,4,5]

let sum = numbers.reduce((acc,value)=>acc+=value)

console.log(sum)