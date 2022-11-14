import React, {Component} from "react";
import "./Components.css";

// export default class Button extends Component{
//     render(){
//         return(
//             <button className="Login-button">
//                 Login
//             </button>
//         )
//     }
// }

export default function Button({className, name, margin, padding, onClick, bgColor, fSize}){
    return(
        <button onClick={onClick} className={className} style={{
            margin: margin,
            padding: padding,
            backgroundColor: bgColor,
            fontSize: fSize
        }}>{name}</button>
    )
}