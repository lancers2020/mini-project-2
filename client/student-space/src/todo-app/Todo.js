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
    )
}