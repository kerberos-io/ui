import React from "react";
import "./input.scss";

export interface FormProps{
    children:HTMLFieldSetElement|HTMLInputElement|any,
}
export const Form = ({children}:FormProps) =>{
    return (
        <form >
            {children}
        </form>
    )
}

