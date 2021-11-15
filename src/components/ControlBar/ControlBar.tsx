import React from "react";
import "./controlbar.scss"

export interface ControlBarProps {
    children: any,
    type: string,
}

export const ControlBar = ({children, type}: ControlBarProps) => {
    return (
        <div className="control-bar">
            <div className={`filtering ${type}`}>
                {children}
            </div>
        </div>
    )
}
