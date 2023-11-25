let a =[10,20,30]
let b =[40,50,60]
let c =[70,80,90]

let d = b.concat(c)

console.log(d)

// let e = a.concat(d)
let e = a.concat(b,c)
console.log(e)