import React,{useMemo, useState} from 'react'

function Counter() {
    const [counterOne, setCounterOne] =useState(0)
    const [counterTwo, setCounterTwo] =useState(0)

    const incrOne = ()=>{
        setCounterOne(counterOne+1)
    }
    const incrTwo=()=>{
        setCounterTwo(counterTwo+1)
    }

    const isEven = useMemo(()=>{
        let i=0
        while(i<2000000000) i++
        return counterOne%2===0
    },[counterOne])
  return (<>
    <div>
      <button onClick={incrOne}>Counter One - {counterOne}</button>
      <span>{isEven? 'Even':'Odd'}</span>
    </div>
    <div>
        <button onClick={incrTwo}>Counter two - {counterTwo}</button>
        {/* <span>{isEven()? 'Even':'Odd'}</span> */}
    </div>
  </>
    
  )
}

export default Counter
