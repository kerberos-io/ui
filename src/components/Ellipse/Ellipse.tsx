import React from "react";
import "./ellipse.scss";

export interface EllipseProps{
    color:string,
    halo?:string,
    blink?:boolean

}

const Ellipse=({color="red",halo,blink}:EllipseProps)=>{
    return(
        <div className="ellipse-container" style={{border:halo?"2px solid "+halo:"none"}}>
            <div className="ellipse" style={{backgroundColor:color,animation:blink?"1s blink ease infinite":"none"}}>
                 <code ></code>
            </div>
      </div>
    )
}

export default Ellipse