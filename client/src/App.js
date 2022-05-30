import './App.css';
import './styles/home.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Home from './components/home';
import Navbar from './components/navbar';
import Book from './components/book'
import Auph from './components/Auph'

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/book' element={<Book/>}/>
          <Route exact path='/auth' element={<Auph/>}/>
        </Routes>
      </Router>
    </div>
  );
}




export default App;
