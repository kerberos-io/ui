import React from "react";
import "./ellipse.scss";

export interface EllipseProps{
    status:string, // must be a variable defined in app.variables.scss
    aura?:boolean,
    blink?:boolean

}

const Ellipse=({
    status="success",
    aura=false,
    blink=false
}:EllipseProps)=>{
    return(
        <div className="ellipse-container" style={{border:aura?`2px solid hsla(var(--${status}-hsl), 0.2)`:"none"}}>
            <div className="ellipse" style={{backgroundColor:`var(--${status})`,animation:blink?"1s blink ease infinite":"none"}}>
                 <code ></code>
            </div>
      </div>
    )
}

export default Ellipse