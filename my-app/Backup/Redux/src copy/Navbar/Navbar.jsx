import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to="/index" className='navbar-brand'>React Hooks Ex</Link>
        <div className='ml-auto'>
            <ul className='navbar-nav'>
                {/* <li className='nav-item'><Link to="/home" className='nav-link'>Home</Link></li>
                <li className='nav-item'><Link to="/about" className='nav-link'>About</Link></li>
                <li className='nav-item'><Link to="/services" className='nav-link'>Services</Link></li>
                <li className='nav-item'><Link to="/contact" className='nav-link'>Contact</Link></li> */}
                {/* <li className='nav-item'><Link to="/useState" className='nav-link'>UseState Ex</Link></li>
                <li className='nav-item'><Link to="/product" className='nav-link'>Product</Link></li> */}
                <li className='nav-item'><Link to="/message" className='nav-link'>Message</Link></li>
                <li className='nav-item'><Link to="/counter" className='nav-link'>Counter</Link></li>
            </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
