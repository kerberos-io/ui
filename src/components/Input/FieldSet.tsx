import React from "react";

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

