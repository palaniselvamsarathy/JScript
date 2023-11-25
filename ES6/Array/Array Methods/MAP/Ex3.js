let arr =[1,2,3,4,5]
let arr2=[6,7,8,9,10]

let combine = arr.map((value,index)=>{
    return value+'-'+arr2[index] 
})

console.log(combine)