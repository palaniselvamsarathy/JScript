import React from 'react'

function Header(props) {
  return (
    <div className='head'>
      <h1>Header Component</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, inventore.</p>
      <h1>Name:{props.name}</h1>
      <h1>Price:{props.price}</h1>
    </div>
  )
}

export default Header
