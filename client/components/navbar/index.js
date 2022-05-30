import React from "react";
const Navbar = () => {
  return (
    <div className="container">
        <div className="logo">
          {/* <a><Image src='/' width='10px' height='10px'></Image></a> */}
        </div>

        <div className="nav">
          <ul>
            <li><a href='#'> Home </a></li>
            <li><a href='#'> Rental </a></li>
            <li><a href='#'> Contact Us </a></li>
          </ul>
        </div>

        <div className="btn">
          <button>Login</button>
        </div>
    </div>
  )
}

export default Navbar;