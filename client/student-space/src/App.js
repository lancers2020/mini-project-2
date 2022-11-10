import './App.css';
import Login from "./pages/Login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Grades from './pages/Grades';
import Bulletin from './pages/Bulletin';
import Menu from './pages/Menu';
import Error from "./pages/Error";
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/grades' element={<Grades />}/>
          <Route path='/bulletin' element={<Bulletin />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
