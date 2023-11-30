import React from "react";

class Msgobject extends React.Component{
    obj = {
        f_name:"Sarathy",
        age:22,
        city:"Bangalore",
        func:function(){
            return "Rajapalayam"
        },
        address:{
            city:"RJPm",
            dist:"VNR"
        }
    }
    render(){
        return <>
                <h1>This is Object Div Element</h1>
                <p>Name:{this.obj.f_name}</p>
                <p>Age:{this.obj.age}</p>
                <p>City:{this.obj.city}</p>
                <p>Area:{this.obj.func()}</p>
                <p>Native:{this.obj.address.city}</p>
                <p>Native2:{this.obj.address.dist}</p>
                </>
    }
}

export default Msgobject