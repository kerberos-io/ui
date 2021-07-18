import React from "react";

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

