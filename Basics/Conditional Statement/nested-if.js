// Nested If

/* 
if(){
    if(){

    }
}
*/

let english=60, maths = 68, tamil = 46

let total ,avg;

total = english+maths+tamil

avg = (english+maths+tamil) /3


console.log(total)
console.log(avg.toFixed(2))


if(english >=35 && tamil>=35 &&  maths >=35){
    console.log("Pass")
    if(avg >= 90 && avg<=100 ){
        console.log("A")
    }
    else if(avg >=80){
        console.log("B")
    }

    else{
        console.log("C")
    }
}

else{
    console.log("Fail")
}

