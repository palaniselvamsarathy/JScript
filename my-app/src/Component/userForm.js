import { useState } from 'react'

function userForm() {
    const [first, setFirst]= useState(' ')
    const [last, setLast]= useState(' ')
    const submitHandler = e =>{
        e.preventDefault()
        alert(`Hello ${first} ${last}`)
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
            <label>First Name: </label>
            <input value={first} onChange={e=>setFirst(e.target.value)} type="text"/>
        </div>
        <div>
            <label>Last Name: </label>
            <input value={last} onChange={e=>setLast(e.target.value)} type="text"/>
        </div>
        <button>submit</button>
      </form>
    </div>
  )
}

export default userForm
