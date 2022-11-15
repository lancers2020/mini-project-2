import React,{Component, useEffect, useState} from 'react';
import "./Pages.css";
import Profilelogo from "../pictures/profile-user.png";
import Axios from 'axios';

function Layout({data, }){
  const [sem, setSem] = useState(1);
  const [math, setMath] = useState([]);
  const [english, setEnglish] = useState([]);
  const [science, setScience] = useState([]);
  const [filipino, setFilipino] = useState([]);
  const [pe, setPe] = useState([]);
  const [programming, setProgramming] = useState([]);

  const sem1 = data[0];
  const sem2 = data[1];

  const Display = ()=>{
    if(sem == 1){
      return(
        <div>
          semester: {sem1.semester}
          math: {sem1.math}
          english: {sem1.english}
          science: {sem1.science}
          filipino: {sem1.filipino}
          pe: {sem1.pe}
          programming: {sem1.programming}
        </div>
      )
    }
    else{
      return(
        <div>
          semester: {sem2.semester}
          math: {sem2.math}
          english: {sem2.english}
          science: {sem2.science}
          filipino: {sem2.filipino}
          pe: {sem2.pe}
          programming: {sem2.programming}
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
  useEffect(()=>{
    Axios.get("http://localhost:3001/grades").then((response)=>{
      setGrades(response.data);
      console.log("axios get success");
      console.log(response.data);
    })
  }, []);
  return (
    <div className='grades-container'>
      <Layout data={grades}/>
    </div>
  )
}

export default Grades