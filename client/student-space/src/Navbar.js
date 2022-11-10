import { Link } from "react-router-dom";

import React from 'react'

function Navbar() {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/grades">Grades</Link>
        <Link to="/bulletin">Bulletin</Link>
        <Link to="/menu">Menu</Link>
    </div>
  )
}

export default Navbar