// Rest Parameter Function
// Is used to convert arbitrary argument
function add(a,b,...rest){
    console.log(a," ",b," ",rest)
    // console.log(b)
    // console.log(rest)
}

add(10,20)
add(10,20,30)
add(10,20,30,40)
add(10,20,30,40,50)