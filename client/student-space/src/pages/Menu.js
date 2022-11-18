import React, { useEffect } from 'react'
import User from "../pictures/profile-user.png";
import Clock from "../components/Clock";
import Books from "../pictures/books.png"
import Winds from "../pictures/wind.png";

function Menu() {
  return (
    <div className='menu-container'>
      <div className='menu-content'>
        <div className='menu-top'>
          <div>
            <img src={User} width="100px" height="auto" alt="profile"/>
          </div>
          <div>
            <div>Dave Limutin</div>
            <div>dlimutin@gmail.com</div>
            <div>Nabunturan, Davao de Oro</div>
            <div></div>
            <div>Grade 10-Zamora</div>
            <div>Class of Prof. Indig</div>
            <div>Science Club</div>
          </div>
          <div className='menu-update'>update</div>
          <div className='menu-logout'>logout</div>
          <div className='menu-top-right'>
            <div>
              <div>Syllabus</div>
              <div>Credentials</div>
            </div>
            <div>
              <div>Help Center</div>
              <div>Ledger</div>
            </div>
            <div>
              <div>Services</div>
            </div>
            <div>
              <div>Lost&Found</div>
              <div>Enroll</div>
              <div>Courses/Programs</div>
            </div>
          </div>
        </div>
        <div className='menu-bottom'>
          <div className='menu-bottom-left'>
            <div></div>
            <div>Personalize</div>
            <div>Theme</div>
            <div>
              <label for="dark-mode">Dark Mode</label>
              <input id="dark-mode" type="radio"/>
            </div>
            <div>Background</div>
          </div>
          <div className='books'>
            <img alt="books" src={Books} width="100px" height="auto"/>
          </div>
          <div className='menu-bottom-right'></div>
        </div>
        <div>
          <Clock/>
        </div>
      </div>
    </div>
  )
}

export default Menu