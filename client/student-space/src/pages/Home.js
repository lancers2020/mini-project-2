import React, { Component } from 'react';
import IconCalculator from '../calculator/IconCalculator';
import Clock from '../components/Clock';
import IconTodo from '../todo-app/IconTodo';
import IconStopwatch from "../stopwatch/IconStopwatch";
import './Pages.css';

function Home() {
  return (
    <div className='home-container'>
      <div className='home-left'>
        <Clock />
      </div>
      <div style={{ marginInline: '10px' }}>
        <IconTodo />
      </div>
      <div style={{ marginInline: '10px' }}>
        <IconCalculator />
      </div>
      <div style={{ marginInline: '10px' }}>
        <IconStopwatch />
      </div>
    </div>
  );
}

export default Home;
