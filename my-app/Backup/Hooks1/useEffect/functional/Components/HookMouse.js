import React,{useState, useEffect} from 'react'

function HookMouse() {
    const [x,setX]= useState(0)
    const [y,setY] = useState(0)
    const logMousePosition = e=>{
        
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("useEffect Mouse")
        
        window.addEventListener('mousemove',logMousePosition)

        return ()=>{
            console.log("Unmounted")
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
  return (
    <div>
      hooks X - {x} hooks Y-{y}
    </div>
  )
}

export default HookMouse
