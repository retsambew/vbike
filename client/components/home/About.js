import React from 'react';
import styles from '../../styles/home.module.css';

const About = () => {
  return (
    <div className={styles.about_container}>
        <h1>About US</h1>
        <div className={styles.about}> 
        <p>V-Bike is a technology and purpose driven mobility platform that enables first
            and last-mile connectivity which is seamless, shared and sustainable. 
        We aim at making a positive social impact by making a difference in the lives
             of people around us.
        It is a smart, green and pocket-friendly mobility solution for students.</p>
        </div>
    </div>
  )
}
export default About;