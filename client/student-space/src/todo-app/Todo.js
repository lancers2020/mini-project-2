import React, { Component, useContext, useEffect, useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import './Todo.css';
import Axios from 'axios';
// import {TodoContext} from "./IconTodo";

export default function Todo({ event }) {
  function Content({ data }) {
    const deleteHandler = (id) => {
      Axios.delete(`http://localhost:3002/todo/id/${id}`)
        .then((response) => {
          // data.filter((item) => {
          //     return item.id != id;
          // });
          setTodoData(
            todoData.filter((item) => {
              return item.id != id;
            })
          );
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return (
      <div className='todo-content-parent'>
        <div>
          {data.map((item, key) => {
            return (
              <div
                className='todo-content-child'
                key={key}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                {item.task}
                <Button
                  onClick={() => {
                    deleteHandler(item.id);
                  }}
                  className='todo-content-button'
                  padding='0 10px'
                  name='-'
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const [task, setTask] = useState('');
  const [show, setShow] = useState(0);
  const [todoData, setTodoData] = useState([]);
  const taskHandler = () => {
    setTask('');
    setShow(show + 1);
    Axios.post('http://localhost:3002/todo/post', {
      task: task,
    }).then(() => {
      console.log('success!');
    });
  };
  useEffect(() => {
    Axios.get('http://localhost:3002/todo/get').then((response) => {
      setTodoData(response.data);
      console.log('uwu, axios get success!');
    });
  }, [show]);
  // const {setIsClicked} = useContext(TodoContext);

  return (
    <div className='todo-wrapper'>
      <div>
        <div onClick={event} className='todo-x'>
          close
        </div>
        <Input
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          margin='0 5px 0 0'
          border='none'
          radius='5px'
          placeHolder='todo here ...'
        />
        <Button
          onClick={taskHandler}
          className='todo-button'
          fSize='20px'
          padding='8px'
          name='add'
        />
      </div>
      <div style={{ overflowY: 'auto' }}>
        <Card
          overflowY='auto'
          height='300px'
          content={<Content data={todoData} />}
        />
      </div>
    </div>
  );
}
