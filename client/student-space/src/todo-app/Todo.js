<<<<<<< HEAD
import React from "react";

export default function Todo(){
    return(
        <div>Todo</div>
=======
import React,{Component} from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import "./Todo.css";

export default function Todo(){
    return(
        <div className="todo-wrapper">
            <div>
                <Input placeHolder="todo here ..."/>
                <Button name="Add"/>
            </div>
            <div></div>
        </div>
>>>>>>> cdff5490b50c1b132784c515dc19dd67ad3061f8
    )
}