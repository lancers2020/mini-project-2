import { Link } from "react-router-dom";
import logo from "./pictures/mini-project-2-logo-2.png";

import React from 'react'

function Navbar() {
  return (
    <div className="navbarWrapper">
      <div>
        <div>
          <div style={{border: "none"}}>
            <Link className="link" to="/"><img width="200px" height="auto" alt="logo" src={logo}/></Link>
          </div>
        </div>
        <div>
          <div>
            <Link className="link" to="/">Home</Link>
          </div>
          <div>
            <Link className="link" to="/grades">Grades</Link>
          </div>
          <div>
            <Link className="link" to="/bulletin">Bulletin</Link>
          </div>
        </div>
        <div>
          <div>
            <div className="link">
              search
            </div>
          </div>
          <div>
            <Link className="link" to="/menu">Menu</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar