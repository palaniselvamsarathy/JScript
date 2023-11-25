function callback(){
    console.log("I am Sarathy and this is callback")
}

function test(callback){
    callback()
}

test(callback)
