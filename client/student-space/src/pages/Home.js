import React,{Component} from 'react';
import IconCalculator from '../calculator/IconCalculator';
import IconTodo from '../todo-app/IconTodo';
import "./Pages.css";

function Home() {
  return (
    <div className='home-container'>
      <div style={{marginInline: "10px"}}>
        <IconTodo />
      </div>
      <div style={{marginInline: "10px"}}>
        <IconCalculator />
      </div>
    </div>
  );
}

export default Home;
