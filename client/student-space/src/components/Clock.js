import React,{useEffect, Component} from "react";
import "./Components.css";

export default function Clock(){
    useEffect(() => {
        const deg = 6;
        const hr = document.querySelector('#hr');
        const mn = document.querySelector('#min');
        const sc = document.querySelector('#sec');

        setInterval(() => {
        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * deg;
        let ss = day.getSeconds() * deg;

        hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;
        });
    },[])
    return(
        <div className='clock'>
          <div className='hour'>
            <div id="hr" className='hr'>

            </div>
          </div>
          <div className='minute'>
            <div id="min" className='min'>

            </div>
          </div>
          <div className='second'>
            <div id="sec" className='sec'>

            </div>
          </div>
        </div>
    )
}