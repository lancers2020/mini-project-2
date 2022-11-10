import React from "react";

export default function Input({margin, placeHolder, onChange, type}){
    return(
        <div>
            <input onChange={onChange} style={{margin: margin}} type={type} placeholder={placeHolder}/>
        </div>
    )
}