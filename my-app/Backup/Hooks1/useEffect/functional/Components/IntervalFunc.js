
import React,{useState , useEffect} from 'react'

function IntervalFunc() {
    const [count,setCount] = useState(0)
    const tick= ()=>{
        setCount(prevCount => prevCount+1)
    }
    useEffect(()=>{
        const interval = setInterval(tick,1000)
        return ()=>{
            clearInterval(interval)
        }
    },[ ])
  return (
    <>
    <div className="conatiner">
        <div className="row">
            <div className="col">
                <h1>{count}</h1>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default IntervalFunc
