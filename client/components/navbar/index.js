import Image from 'next/image'
import styles from '../../styles/navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
          {/* <a><Image src='/' width='10px' height='10px'></Image></a> */}
        </div>

        <div className={styles.nav}>
          <ul>
            <li>Home</li>
            <li>Rental</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className={styles.btn}>
          <button>Login</button>
        </div>
    </div>
  )
}

export default Navbar;