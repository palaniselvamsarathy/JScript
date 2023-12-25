import React from 'react'
import { useState } from 'react'
function Product() {
    // let state={
    //     name:"Sarathy",
    //     age:18
    // }
    let [name, setName] = useState("")
    let changeName = ()=>{

        return setName("sarathy")
    }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>Change</button>
    </div>
  )
}

export default Product
