import React from "react";
import { useState } from "react";
import Axios from "axios";
import Button from "../components/Button";
import Input from "../components/Input";

export default function TestServerDisplay(){
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState("");
    const [position, setPosition] = useState("");
    const [wage, setWage] = useState(0);
    
    const [display, setDisplay] = useState([]);
    const onSubmitHandler = () => {
        Axios.post("http://localhost:3001/create",{
            name: name,
            age: age,
            country: country,
            position: position,
            wage: wage
        }).then(()=>{
            console.log("success!");
        });
    }
    const showHandler = ()=>{
        Axios.get("http://localhost:3001/employees").then((response)=>{
            setDisplay(response.data);
        });
    }

    return(
        <div style={{backgroundColor: "aliceblue", margin: "100px auto", padding: "10px"}}>
            <Input placeHolder="name" onChange={(e)=>{
                setName(e.target.value);
            }}/>
            <Input placeHolder="age" onChange={(e)=>{
                setAge(e.target.value);
            }}/>
            <Input placeHolder="country" onChange={(e)=>{
                setCountry(e.target.value);
            }}/>
            <Input placeHolder="position" onChange={(e)=>{
                setPosition(e.target.value);
            }}/>
            <Input placeHolder="wage" onChange={(e)=>{
                setWage(e.target.value);
            }}/>
            <Button name="Post" onClick={onSubmitHandler}/>
            <Button name="Display" onClick={showHandler}/>
            {
                display.map((item, key) =>{
                    return(
                        <div key={key}>
                            {item.name}
                            {item.age}
                            {item.country}
                            {item.position}
                            {item.wage}
                        </div>
                    )
                })
            }
        </div>
    );
}