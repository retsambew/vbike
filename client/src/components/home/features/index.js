import React from 'react';
import './index.css';
import MySlider from './MySlider.js';

const Features = () => {
    return (
        <div className='caro-container'>
            <div className='caro-subcontainer'>
                <h1>Features</h1>
                <MySlider/>
                <div className='caro-icon'><i class="far fa-hand-pointer"></i></div>
            </div>
        </div>
    )
}

export default Features;