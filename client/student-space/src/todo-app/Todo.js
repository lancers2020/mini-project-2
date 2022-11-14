import React,{Component, useEffect, useState} from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";
import "./Todo.css";
import Axios from "axios";



export default function Todo(){

    function Content({data}){
        const deleteHandler=(id)=>{
            Axios.delete(`http://localhost:3001/todo/id/${id}`).then((response) =>{
                // data.filter((item) => {
                //     return item.id != id;
                // });
                setTodoData(todoData.filter((item) => {
                        return item.id != id;
                }));
            }).catch((error) =>{
                console.log(error)
            })
        }
        return(
            <div className="todo-content-parent">
                <div>
                    {data.map((item, key) =>{
                        return(
                            <div className="todo-content-child" key={key} style={{display: "flex",alignItems: "center", justifyContent: "space-between"}}>
                                {item.task}
                                <Button onClick={()=>{
                                    deleteHandler(item.id)
                                }} className="todo-content-button" padding="0 10px" name="-"/>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    } 

    const [task, setTask] = useState("");
    const [show, setShow] = useState(0);
    const [todoData, setTodoData] = useState([]);
    const taskHandler = () => {
        setTask("");
        setShow(show+1);
        Axios.post("http://localhost:3001/todo/post",{
            task: task
        }).then(()=>{
            console.log("success!");
        });
    }
    useEffect(()=>{
        Axios.get("http://localhost:3001/todo/get").then((response)=>{
            setTodoData(response.data);
            console.log("uwu, axios get success!")
        });
    },[show]);

    return(
        <div className="todo-wrapper">
            <div>
                <div className="todo-x">X</div>
                <Input value={task} onChange={(e)=>{setTask(e.target.value)}} margin="0 5px 0 0" border="none" radius="5px" placeHolder="todo here ..."/>
                <Button onClick={taskHandler} className="todo-button" fSize="20px" padding="8px" name="add"/>
            </div>
            <Card minHeight="300px" content={<Content data={todoData}/>}/>
        </div>
    )
}