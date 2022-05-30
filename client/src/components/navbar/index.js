import React from "react";
import '../../styles/navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navcontainer">
        <div className="logo">
          <a>V-Bike</a>
        </div>

        <div className="nav">
          <ul>
            <li><a> <Link to='/' className='black'>Home</Link> </a></li>
            <li><a> <Link to='/book' className='black'>Rental</Link> </a></li>
            <li><a> <Link to='/contact' className='black'>Contact Us</Link> </a></li>
          </ul>
        </div>

        <Link to='/auth' className='black'><div className="btn">
          <button id="myBtn"> <a>Login</a></button>
        </div></Link>
    </div>
  )
}

export default Navbar;