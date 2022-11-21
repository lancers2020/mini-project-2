import React, { useState, createContext } from 'react';
import Button from '../components/Button';
import Stopwatch from './Stopwatch';

// export const TodoContext = createContext(null);

export default function IconTodo() {
const [isClicked, setIsClicked] = useState(false);
const callBack = () =>{
  setIsClicked(false);
}
const Content = () => {
  if (isClicked) {
    return (
      // <TodoContext.Provider value={{isClicked, setIsClicked}}>
        <Stopwatch event={callBack}/>
      // </TodoContext.Provider>
    );
  } else {
    return (
        <Button
        name='StopWatch'
        onClick={() => {
          setIsClicked(true);
        }}
      />
    );
  }
};

  return (
        <Content />
  );
}
