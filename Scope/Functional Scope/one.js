function myfunction(){
    let funcScopevar = "This is Func Scope var"
    console.log(funcScopevar)

    function add(){
        console.log(funcScopevar)
    }
    add()
}

myfunction()

// use let and var in functional scope