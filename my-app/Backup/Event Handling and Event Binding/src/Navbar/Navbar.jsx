import React from 'react'

class Navbar extends React.Component{
    render() {
      return (
        <>
            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav> */}
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <a href='#' className='navbar-brand'>React JS</a>
                <div className='ml-auto'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a href="#" className='nav-link'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#" className='nav-link'>About</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#" className='nav-link'>Contact</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#" className='nav-link'>Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
      )
    }
}

export default Navbar