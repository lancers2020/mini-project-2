<<<<<<< HEAD
import React from "react";

export default function IconTodo(){
    return(
        <div>Todo</div>
=======
import React, { useState } from "react";
import Button from "../components/Button";
import Todo from "./Todo";

export default function IconTodo(){
    const [isClicked, setIsClicked] = useState(false);
    const Content = () =>{
        if(isClicked){
            return(
                <Todo/>
            )
        }else{
            return(
                <Button name="Todo" onClick={()=>{setIsClicked(true)}}/>
            )
        }
    }

    return(
        <Content/>
>>>>>>> cdff5490b50c1b132784c515dc19dd67ad3061f8
    )
}