import React,{Component} from 'react';
import IconCal from '../calculator/IconCalculator';
import IconTodo from '../todo-app/IconTodo';
import "./Pages.css";

function Home() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '15%',
        alignItems: 'center',
      }}
    >
      <IconTodo />
      <IconCal />
      <div>UwU</div>
    </div>
  );
}

export default Home;
