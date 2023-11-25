// Print Max in an array using foreach

numbers=[1,23,,457,622,201,43]
let max= numbers[0]
numbers.forEach(num => {
    // console.log(num)
    if(num>max){
        max=num
    }
});

console.log(max)