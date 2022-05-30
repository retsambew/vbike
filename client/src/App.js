import './App.css';
import './styles/home.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Home from './components/home';
import Navbar from './components/navbar';
import Book from './components/book'
import Auph from './components/Auph'
import Wallet from './components/wallet';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/book' element={<Book/>}/>
          <Route exact path='/auth' element={<Auph/>}/>
          <Route exact path='/wallet' element={<Wallet/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
