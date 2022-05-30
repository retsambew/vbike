import './App.css';
import './styles/home.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Home from './components/home';
import Navbar from './components/navbar';
import Book from './components/book'
import Auth from './components/Auth'

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/book' element={<Book/>}/>
          <Route exact path='/auth' element={<Auth/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
