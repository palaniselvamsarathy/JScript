let arr = [];

for (let i=0;i<5;i++){
    arr.push([])
    for (let j=0;j<5;j++){
        arr[i].push(j)
    }
}

console.log(arr)

console.table(arr)


for(let i=0;i<=3;i++){
    for(let j=0;j<=i;j++){
        console.log("*")
    }
    console.log('\n')
}