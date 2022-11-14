import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Pages from "../Pages";

export default function Login(){
    const users = [
        {id: 123, password: 123},
        {id: 456, password: 456},
        {id: 789, password: 789},
        {id: 987, password: 987},
        {id: 654, password: 654},
        {id: 321, password: 321}
    ]
    const [authenticated, setAuthenticated] = useState(false);
    
    const Content = () => {
        const [id, setId] = useState(0);
        const [password, setPassword] = useState("");
        const onSubmit = (e) => {
            //this is the route trigger point
            console.log(id, password);
            for(var i = 0; i < users.length; i++){
                if(id == users[i].id && password == users[i].password){
                    setAuthenticated(true);
                }
            }
        }
    
        if(authenticated == false){
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
                    <div>
                        <Button onClick={onSubmit} className="Login-button" name="Login" margin="20px" padding="20px"/>
                    </div>
                </div>
            )
        }else{
            return(
                <Pages/>
            )
        }
    }

    return(
        <div>
            <Content />
        </div>
    )
}