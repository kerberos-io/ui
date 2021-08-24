import React from "react";
import "./controlbar.scss"
export interface ControlBarProps{
    children:any
}

export const ControlBar = ({children}:ControlBarProps) =>{
    return(
        <div className="controlbar">
                {React.Children.map(children,(child,ind)=>
                <div className="controlbar-item">{child}</div>)}            
        </div>
    )
}