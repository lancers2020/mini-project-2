import React, { useState, createContext } from 'react';
import Button from '../components/Button';
import Todo from './Todo';

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
        <Todo event={callBack}/>
      // </TodoContext.Provider>
    );
  } else {
    return (
        <Button
        name='Todo'
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
