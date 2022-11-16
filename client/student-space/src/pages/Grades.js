import React,{Component, useEffect, useState} from 'react';
import "./Pages.css";
import Profilelogo from "../pictures/profile-user.png";
import Axios from 'axios';

function Layout({math, english, science, filipino, pe, programming}){
  const [sem, setSem] = useState(1);

  const Display = ()=>{
    if(sem == 1){
      return(
        <div className='grade-display-parent'>
          <div className='grade-display'>
            <div>
              <div>semester:</div>
              <div>math:</div>
              <div>english:</div>
              <div>science:</div>
              <div>filipino:</div>
              <div>pe:</div>
              <div>programming:</div></div>
            <div>
              <div>{sem}</div>
              <div>{math[0]}</div>
              <div>{english[0]}</div>
              <div>{science[0]}</div>
              <div>{filipino[0]}</div>
              <div>{pe[0]}</div>
              <div>{programming[0]}</div>
            </div>
          </div>
        </div>
      )
    }
    else{
      return(
        <div className='grade-display-parent'>
          <div className='grade-display'>
            <div>
              <div>semester:</div>
              <div>math:</div>
              <div>english:</div>
              <div>science:</div>
              <div>filipino:</div>
              <div>pe:</div>
              <div>programming:</div></div>
            <div>
              <div>{sem}</div>
              <div>{math[1]}</div>
              <div>{english[1]}</div>
              <div>{science[1]}</div>
              <div>{filipino[1]}</div>
              <div>{pe[1]}</div>
              <div>{programming[1]}</div>
            </div>
          </div>
        </div>
      )
    }
  }

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
          <div>
            <select onChange={(e) => {
              setSem(e.target.value);
            }}>
              <option value="1">semester 1</option>
              <option value="2">semester 2</option>
            </select>
          </div>
        </div>
      </div>
        <Display/>
    </div>
  )
}

function Grades() {
  const [grades, setGrades] = useState([]);

  const listFirstSem = [];
  const listSecondSem = [];

  const math = [];
  const english = [];
  const science = [];
  const filipino = [];
  const pe = [];
  const programming = [];

  useEffect(()=>{
    Axios.get("http://localhost:3001/grades").then((response)=>{
      setGrades(response.data);
      console.log("axios get success");
      console.log(response.data);
    });

  }, []);
  
  Object.keys(grades).map(item => {
    math.push(grades[item].math);
    english.push(grades[item].english);
    science.push(grades[item].english);
    filipino.push(grades[item].filipino);
    pe.push(grades[item].pe);
    programming.push(grades[item].programming);
  })
  return (
    <div className='grades-container'>
      <Layout math={math} english={english} science={science} filipino={filipino} pe={pe} programming={programming}/>
      <div className='layout-left-container'>
        <div>Print</div>
        <div>Download</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Grades