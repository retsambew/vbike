import './App.css';
import './styles/home.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Home from './components/home';
import Navbar from './components/navbar';
import Book from './components/book'
<<<<<<< HEAD
import Auth from './components/Auth'
=======
import Auph from './components/Auph'
import Wallet from './components/wallet';
>>>>>>> c45b4a5e20012711b8e2d8906ce9406c4806eeef

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/book' element={<Book/>}/>
<<<<<<< HEAD
          <Route exact path='/auth' element={<Auth/>}/>
=======
          <Route exact path='/auth' element={<Auph/>}/>
          <Route exact path='/wallet' element={<Wallet/>}/>
>>>>>>> c45b4a5e20012711b8e2d8906ce9406c4806eeef
        </Routes>
      </Router>
    </div>
  );
}

export default App;
