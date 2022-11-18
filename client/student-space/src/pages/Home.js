import React, { Component } from 'react';
import IconCalculator from '../calculator/IconCalculator';
import Clock from '../components/Clock';
import IconTodo from '../todo-app/IconTodo';
import './Pages.css';
import Stopwatch from '../stopwatch/Stopwatch';

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
    </div>
  );
}

export default Home;
