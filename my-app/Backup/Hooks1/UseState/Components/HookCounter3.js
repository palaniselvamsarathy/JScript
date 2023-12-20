import React, { useState } from 'react'

function HookCounter3() {
    const [name,setName] = useState({fname:'', lname: ''})
  return (
    <div>
      <form>
        <br />
        <br />
        <input 
            type="text" 
            value={name.fname} 
            onChange={e=> setName({...name, fname: e.target.value})}
        />
        <br /><br />
        <input 
            type="text"
            value={name.lname}
            onChange={e => setName({...name, lname: e.target.value})}

        />
        <h2>Your First Name is: {name.fname}</h2>
        <h2>Your Last Name is: {name.lname}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  )
}

export default HookCounter3
