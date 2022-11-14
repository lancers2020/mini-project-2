import React from "react";

export default function Input({value, margin, placeHolder, onChange, type, width, radius, border}){
    return(
            <input value={value} onChange={onChange} style={{margin: margin, width: width, borderRadius: radius, border: border}} type={type} placeholder={placeHolder}/>
    )
}