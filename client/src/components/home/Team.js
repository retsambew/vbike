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
          <h3 className='fac_name'>Praveen Kumar Shukla</h3>
          <h4>Faculty</h4>
        </div>

        <div className='card img2'>
          <div className='social'>
            {/* <a href="#"><i className="fab fa-facebook-f" /></a> */}
            <a href="https://www.instagram.com/harshpailkar/">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://www.linkedin.com/in/harsh-pailkar-388aa21ba/">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          <h3>Harsh</h3>
          <h4>President</h4>
        </div>

        <div className='card img3'>
          <div className='social'>
            {/* <a href="#"><i className="fab fa-facebook-f" /></a> */}
            <a href="https://www.instagram.com/devanshuyadav16/">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://www.linkedin.com/in/devanshu-yadav-1635991b4/">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          <h3>Devanshu</h3>
          <h4>Vice President</h4>
        </div>

        <div className='card img4'>
          <div className='social'>
            {/* <a href="#"><i className="fab fa-facebook-f" /></a> */}
            <a href="https://www.instagram.com/devanshuyadav16/">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://www.linkedin.com/in/devanshu-yadav-1635991b4/">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          <h3>Devanshu</h3>
          <h4>Vice President</h4>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Team