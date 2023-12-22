import React, { useState ,useCallback} from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'
function ParentComponent() {
    const [age,setAge]= useState(25)
    const [salary,setSalary]= useState(50000)
    const incrAge = useCallback(()=>{
        setAge(age+1)
    },[age]) 
    const incrSalary =useCallback(()=>{
        setSalary(salary+10000)
    },[salary]) 
  return (
    <div>
      <p>This is Parent Component</p>
      <Title/>
      <Count text="Age" count={age} />
      <Button handleClick ={incrAge}>increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick ={incrSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent
