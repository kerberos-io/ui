import React, { FormEvent } from "react";
import "./input.scss";

export interface FormProps{
    children:HTMLFieldSetElement|HTMLInputElement|any,
    onSubmit?:(
        event:React.SyntheticEvent|any
    ) => void
}
export const Form = ({children,onSubmit}:FormProps) =>{
    return (
        <form onSubmit={onSubmit} noValidate>
            {children}
        </form>
    )
}

