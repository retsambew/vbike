import React from "react";
import '../../styles/navbar.css'

const Navbar = () => {
  return (
    <div className="container">
        <div className="logo">
          <a>V-Bike</a>
        </div>

        <div className="nav">
          <ul>
            <li><a href='#'> Home </a></li>
            <li><a href='#'> Rental </a></li>
            <li><a href='#'> Contact Us </a></li>
          </ul>
        </div>

        <div className="btn">
          <button id="myBtn"> <a href="../../components/Auph/Auph.js"> Login </a></button>
            
        </div>
    </div>
  )
}

export default Navbar;