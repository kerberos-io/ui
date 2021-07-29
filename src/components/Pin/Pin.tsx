import React from "react";
import "./pinnedbadge.scss"
export interface PinProps{
    pin:string,
    status:string,
    round?:boolean

}

const Pin = ({pin,status,round}:PinProps) =>{
    const abbrPin = pin.split(" ").map(w =>w.slice(0,1).toUpperCase()).join("").slice(0,3)
    return (
        <div className="pinned-badge" style={{backgroundColor:`hsla(var(--${status}-hsl), 0.1)`,
        border:`2px solid hsla(var(--${status}-hsl), 1)`,
        borderRadius:round ? "50%":"var(--radius)"
        }}>
            <span>{abbrPin}</span>
        </div>
    )
}

export default Pin       