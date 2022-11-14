import React,{Component} from 'react';
import "./Pages.css";

function Layout(){
  return(
    <div className='layout-container'>
      <div>
        <div>
          <div>photo</div>
          <div>
            <div>name</div>
            <div>class</div>
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