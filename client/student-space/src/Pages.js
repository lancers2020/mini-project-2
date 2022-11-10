import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './Navbar';
import Bulletin from './pages/Bulletin';
import Error from './pages/Error';
import Grades from './pages/Grades';
import Home from './pages/Home';
import Menu from './pages/Menu';

function Pages() {
  return (
    <div>
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
  )
}

export default Pages