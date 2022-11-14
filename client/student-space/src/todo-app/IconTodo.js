import React, { useState } from 'react';
import Button from '../components/Button';
import Todo from './Todo';

export default function IconTodo() {
  const [isClicked, setIsClicked] = useState(false);
  const Content = () => {
    if (isClicked) {
      return <Todo />;
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

  return <Content />;
}
