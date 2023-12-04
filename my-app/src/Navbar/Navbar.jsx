import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <>
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <link to="" className='navbar-brand'>React Examples</link>
        <div>
            <ul className='navbar-nav'>
                <li className='nav-item'><link to="#" className='nav-link'>Home</link></li>
                <li className='nav-item'><link to="#" className='nav-link'>About</link></li>
                <li className='nav-item'><link to="#" className='nav-link'>Projects</link></li>
                <li className='nav-item'><link to="#" className='nav-link'>Contact</link></li>
                <li className='nav-item'><link to="#" className='nav-link'>Services</link></li>
            </ul>
        </div>
      </nav>
      </>
    )
  }
}

export default Navbar
