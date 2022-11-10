import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import {useNavigate} from "react-router-dom";

export default function Login(){
    let navigate = useNavigate();
    const users = [
        {id: 123, password: 123},
        {id: 456, password: 456},
        {id: 789, password: 789},
        {id: 987, password: 987},
        {id: 654, password: 654},
        {id: 321, password: 321}
    ]
    const [id, setId] = useState(0);
    const [password, setPassword] = useState("");
    const [isClicked, setIsClicked] = useState(false);

    
    const onSubmit = (e) => {
        //this is the route trigger point
        console.log(id, password);
        for(var i = 0; i < users.length; i++){
            if(id == users[i].id && password == users[i].password){
                navigate("/home");
            }
        }
    }
    return(
        <div className="Login-container">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <Input 
                onChange={(e) => {
                    setId(e.target.value);
                }}  
                margin="160px 20px 20px 20px"
                placeHolder="I.D."
                type="number"
            />
            <Input
                onChange={(e) => {
                    setPassword(e.target.value);
                }}  
                margin="10px 20px"
                placeHolder="Password"
                type="password"
            />
            <Button onClick={onSubmit} className="Login-button" name="Login" margin="20px" padding="20px"/>
        </div>
    )
}