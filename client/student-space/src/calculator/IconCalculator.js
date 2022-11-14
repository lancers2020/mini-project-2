import React, { useState, createContext } from 'react';
import Button from '../components/Button';
import Calculator from './Calculator';

// export const TodoContext = createContext(null);

export default function IconTodo() {
    const [isClicked, setIsClicked] = useState(false);
    const callBack = () =>{
    setIsClicked(false);
    }
    const Content = () => {
    if (isClicked) {
        return (
            <Calculator event={callBack}/>
        );
    } else {
        return (
            <Button
            name='Calculator'
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
