import React from "react";
import "./input.scss"

export interface FieldSetProps{
    children:HTMLInputElement|any
}
export const FieldSet = ({children}:FieldSetProps) =>{
    return (
        <fieldset>
            {children}
        </fieldset>
    )
}

