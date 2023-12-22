import {useState} from 'react'

function useCounter() {
    const [count,setCount]=useState(0)
    let incr = ()=>{
        setCount(prevCount => prevCount+1)
    }
    let decr = ()=>{
        setCount(prevCount => prevCount-1)
    }
    let reset = ()=>{
        setCount(0)
    }
    return [count,incr,decr,reset]
}

export default useCounter
