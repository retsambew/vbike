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
            <li><a href='#'> Home </a></li>
            <li><a href='#'> Rental </a></li>
            <li><a href='#'> Contact Us </a></li>
          </ul>
        </div>

        <div className={styles.btn}>
          <button>Login</button>
        </div>
    </div>
  )
}

export default Navbar;