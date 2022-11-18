import React, { Component } from 'react';
import './Stopwatch.css';

const Stopwatch = ({event}) => {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className='Timers'>
      <div onClick={event} className="stopwatch-x">close</div>
      <h2>Stopwatch</h2>
      <div id='display'>
        <div>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</div>
        <div>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</div>
        <div>{('0' + ((time / 10) % 100)).slice(-2)}</div>
      </div>

      <div id='buttons'>
        {!timerOn && time === 0 && (
          <button className='stopwatch-button' onClick={() => setTimerOn(true)}>
            Start
          </button>
        )}
        {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
        {!timerOn && time > 0 && (
          <button className='stopwatch-button' onClick={() => setTime(0)}>
            Reset
          </button>
        )}
        {!timerOn && time > 0 && (
          <button className='stopwatch-button' onClick={() => setTimerOn(true)}>
            Resume
          </button>
        )}
      </div>
    </div>
  );
};

export default Stopwatch;
