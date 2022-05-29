import styles from '../../styles/home.module.css';

const Hero = () => {
  return (
    <div className={styles.hero_section}>
        <h1>Pedal around with us!</h1>
        <h2>V-Bike brings to you a sharable, sustainable and affordable mobility solution.</h2>
        <button className={styles.book_btn}>Book A Ride</button>
    </div>
  )
}

export default Hero;