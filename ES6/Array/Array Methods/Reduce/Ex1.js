let colors = ['red','blue','blue','yellow','red','blue']
let fin = colors.reduce((acc,value)=>{
    if(value in acc){
        acc[value]++
    }
    else{
        acc[value]=1
    }
    return acc
},{})

console.log(fin)