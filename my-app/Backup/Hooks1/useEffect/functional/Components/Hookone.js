import React ,{useState,useEffect}from 'react'

function Hookone() {
    const [count,setCount]= useState(0)
    const [name,setName] = useState('')
    useEffect(()=>{
        console.log("Use effect - updating document title")
        document.title = `You clicked ${count} times`
    },[count])
  return (
    <div>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} />
      <button onClick={()=>setCount(count+1)}>Click {count}times</button>
      <pre>{JSON.stringify(name)}</pre>
    </div>
  )
}

export default Hookone
