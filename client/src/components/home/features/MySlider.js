import React, { Component } from "react";
import Slider from "react-slick";
import './MySlider.css';

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots:true,
      touchMove:true,
      arrows: false,
      infinite: true,
      slidesToShow: 2.8,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      useCSS:true,
      className:'slide-main',
    };
    return (
      <div className='slide-main'>
        <Slider {...settings}>
          <div className='slide-div'>
            <div className='col-a'>
              <h1 className='slide-head'>Flexible Ownership</h1>
              <p className='slide-desc'>Enjoy the freedom of owning a bicycle without actually having to buy it, all at very minimal cost.  </p>
            </div>
          </div>
          <div className='slide-div'>
            <div className='col-b'>
              <h1 className='slide-head'>Ride Smart with us</h1>
              <p className='slide-desc'>On-demand bicycles that allow you to go further, get there faster, and have more fun.</p>
            </div>
          </div>
          <div className='slide-div'>
            <div className='col-c'>
              <h1 className='slide-head'>Secure payments</h1>
              <p className='slide-desc'>Make instant payments that are secured through blockchain technology.</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}