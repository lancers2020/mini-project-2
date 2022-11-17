import React from 'react'
import FireworkLeft from "../pictures/fireworks.png";
import FireworkRight from "../pictures/fireworks_2.png";
import Card from "../components/Card";
import CodingFirstPlace from "../pictures/pinoy-competition.jpg";

function Bulletin() {
  const data = [
    "DCNHS winning the NATIONAL-level Coding Competition!",
    "DCNHS scores again! Top 4 in the Regional Extemporaneous Speaking held in Baguio City.",
    "Fun collaboration with CCNHS #UNITY",
    "Enjoy and spend time with your Families this Christmas! See you on January 4th, 2023!"
  ]
  return (
    <div className='bulletin-container'>
      <div className='bulletin-left'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <h2 data-text="2022-2023">
          2022-2023
        </h2>
        <h3>
          2022 was a rainbow of POSSIBILITIES, so here's to creating NEW GOALS for 2023
        </h3>
        <div className='greetings'>happy new year!</div>
        <div id="fireworks-left" className='fireworks'><img src={FireworkLeft} width="100%" heigh="auto"/></div>
        <div id="fireworks-right" className='fireworks'><img src={FireworkRight} width="100%" heigh="auto"/></div>
        <h5>Classes will continue on January 4, 2023!</h5>
      </div>

      <div className='events'>EVENTS</div>

      <div className='bulletin-right'>
        {data.map((item)=>{
          return(
            <Card padding="10px" content={
              <div className='status-container'>
                <div>
                  <div className='status-profile'>
                    <div>DCNHS</div>
                    <div>5hrs ago</div>
                  </div>
                  <div>{item}</div>
                </div>
                <div><img src={CodingFirstPlace} width="100%" height="auto" alt="coding-competition"/></div>
              </div>
            }/>
          )
        })}
        <div className='post-container'></div>
      </div>
    </div>
  )
}

export default Bulletin