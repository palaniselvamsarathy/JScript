let f_name = "Palani"
let l_name = "Selvam"

// Concatenation

let result;
result = f_name+" "+l_name

console.log(result)

result = f_name.concat(" ",l_name)

console.log(result)

// append and escaping
c= `she can't run`
c= 'she can\'t run'
c= "she can't run"
c+= ' yes'

console.log(c)

c= f_name.toUpperCase()

// toLowerCase
console.log(c)

let arr = "Sarathy"

console.log(arr.indexOf("a"))
console.log(arr.lastIndexOf("a"))

console.log(arr.charAt(3))

// charCodeAt represents ascii value of the string

console.log(arr.substr(0,3))

// substr is old version method

// use substring

console.log(arr.substring(1,9))

// Slice
console.log(arr.slice(2,4))

// It you gives a wrong index it gives a empty string
// Negative indexing is possible only in slice