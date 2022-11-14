import React,{Component} from 'react';
import IconCalculator from '../calculator/IconCalculator';
import IconTodo from '../todo-app/IconTodo';
import "./Pages.css";

function Home() {
  return (
    <div className='home-container'>
      <IconTodo />
      <IconCalculator />
    </div>
  );
}

export default Home;
