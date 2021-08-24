import React from "react";
import "./controlbar.scss"

export interface ControlBarProps {
    children: any
}

export const ControlBar = ({children}: ControlBarProps) => {
    return (
        <div className="control-bar">
            <div className="filtering">
                {children}
            </div>
        </div>
    )
}
