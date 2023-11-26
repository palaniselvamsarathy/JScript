let arr = [1,2,3,4,5,6,7,8]

const [a,,,,,,b]= arr
console.log(a)
console.log(b)

const[c,d,...rest]= arr
console.log(c)
console.log(d)
console.log(rest)