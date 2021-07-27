import React from "react";
import "./input.scss";

export interface FormProps{
    children:HTMLFieldSetElement|HTMLInputElement|any,
    onSubmit?:(
        event:React.FormEvent<HTMLFormElement>|any
    ) => void|any
}
export const Form = ({children,onSubmit}:FormProps) =>{
    return (
        <form onSubmit={onSubmit} noValidate>
            {children}
        </form>
    )
}

