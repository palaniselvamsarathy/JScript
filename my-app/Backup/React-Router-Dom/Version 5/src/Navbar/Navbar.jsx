import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <>
      {/* <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
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
      </nav> */}
      {/* <h1>This is Navbar</h1> */}
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <a href='/home' className='navbar-brand'>React Example</a>
        <div className='ml-auto'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to="/home" className="nav-link">Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="/about" className="nav-link">About</Link></li>
            <li className='nav-item'>
              <Link to="/service" className="nav-link">Service</Link></li>
            <li className='nav-item'>
              <Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </div>
      </nav>
      </>
    )
  }
}

export default Navbar
