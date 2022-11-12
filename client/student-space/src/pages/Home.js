import React from 'react';
import IconCal from '../calculator/IconCalculator';
import IconTodo from '../todo-app/IconTodo';

function Home() {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <IconTodo/>
      <IconCal/>
    </div>
  );
}

export default Home;
