import React,{Component} from 'react';
import "./Pages.css";
import Profilelogo from "../pictures/profile-user.png";

function Layout(){
  return(
    <div className='layout-container'>
      <div>
        <div>
          <div><img src={Profilelogo} alt="profile" width="140px" height="auto"/></div>
          <div className='layout-details'>
            <div>Dave C. Limutin</div>
            <div>Grade 10-Zamora</div>
            <div>dlimutin@gmail.com</div>
          </div>
        </div>
        <div>
          <div>select</div>
          <div>submit</div>
        </div>
      </div>
      <div>
        grades content
      </div>
    </div>
  )
}

function Grades() {
  return (
    <div className='grades-container'>
      <Layout/>
    </div>
  )
}

export default Grades