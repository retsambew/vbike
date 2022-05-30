import React from 'react'
import '../../styles/booking.css'
const Book = () => {
  return (
    <div className='container_book'>

      <div className='bike_img'>
        <div id='img_1'>
          <img src=""></img>
        </div>

        <div className='bike'>
          <h2>Mountain Bike</h2>
          <div className='flex'>
            <p>For Hours</p>
            <p>Rs. 25</p>
          </div>
          <div className='flex'>
            <p>For Day </p>
            <p>Rs. 400</p>
          </div>
          <div className='flex'>
            <p>For Months</p>
            <p>Rs. 1800</p>
          </div>
        </div>
        <div >
          <button> Book Now</button>
          <br></br>
          <div className='dropdown'>
            <label for="pickup">Pickup Point:</label>
            <select id="pickup" name="pickup">
              <option value="p1">Main Gate</option>
              <option value="p1">Academic Block</option>
              <option value="p3">Girls Hostel</option>
              <option value="p4">Old Boy's Hostel</option>
              <option value="p5">New boy's Hostel</option>
            </select>
          </div>
        </div>
      </div>

      <div className='bike_img'>
        <div id='img_2'>
          <img src=""></img>
        </div>
        <div className='bike'>
          <h2>Classic Bike</h2>
          <div className='flex'>
            <p>For Hours</p>
            <p>Rs. 20</p>
          </div>
          <div className='flex'>
            <p>For Day </p>
            <p>Rs. 300</p>
          </div>
          <div className='flex'>
            <p>For Months</p>
            <p>Rs. 1200</p>
          </div>
        </div>
        <div >
          <button> Book Now</button>
          <br></br>
          <div className='dropdown'>
            <label for="pickup">Pickup point:</label>
            <select id="pickup" name="pickup">
              <option value="p1">Main Gate</option>
              <option value="p1">Academic Block</option>
              <option value="p3">Girls Hostel</option>
              <option value="p4">Old Boy's Hostel</option>
              <option value="p5">New boy's Hostel</option>
            </select>
          </div>
        </div>
      </div>

      <div className='bike_img'>
        <div id='img_3'>
          <img src=""></img>
        </div>
        <div className='bike'>
          <h2>Regular Bike</h2>
          <div className='flex'>
            <p>For Hours</p>
            <p>Rs. 15</p>
          </div>
          <div className='flex'>
            <p>For Day </p>
            <p>Rs. 200</p>
          </div>
          <div className='flex'>
            <p>For Months</p>
            <p>Rs. 800</p>
          </div>
        </div>
        <div >
          <button> Book Now</button>
          <br></br>
          <div className='dropdown'> 
            <label for="pickup">Pickup point:</label>
            <select id="pickup" name="pickup">
              <option value="p1">Main Gate</option>
              <option value="p1">Academic Block</option>
              <option value="p3">Girls Hostel</option>
              <option value="p4">Old Boy's Hostel</option>
              <option value="p5">New boy's Hostel</option>
            </select>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Book;