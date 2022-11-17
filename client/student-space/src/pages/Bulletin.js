import React from 'react'
import FireworkLeft from "../pictures/fireworks.png";
import FireworkRight from "../pictures/fireworks_2.png";

function Bulletin() {
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
      <div className='bulletin-right'>

      </div>
    </div>
  )
}

export default Bulletin