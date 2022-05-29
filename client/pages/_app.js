import '../styles/globals.css'
import NavBar from '../components/navbar/index.js';
import Footer from '../components/footer/index.js';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}

export default MyApp
