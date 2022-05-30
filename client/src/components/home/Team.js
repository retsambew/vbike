import React from "react"
import "../../styles/teams.css"

const Team = () => {
  return (
    <div className='container'>
      <div className='infoSection'>
        <h3>Team</h3>
      </div>

      <div className='ourteam'>
      <div className='cardContainer'>
        <div className='card img1'>
          <div className='social'>
            {/* <a href="#"><i className="fab fa-facebook-f" /></a> */}
            {/* <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a> */}
          </div>
          <h3 className='fac_name'>Naman Arora</h3>
        </div>

        <div className='card img2'>
          <h3>Shristi Badhwar</h3>
        </div>

        <div className='card img3'>
          <h3>Nayan Agrawal</h3>
        </div>

        <div className='card img4'>
          <h3>Vedansh Nigam</h3>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Team