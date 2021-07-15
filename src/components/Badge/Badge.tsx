import React from "react";
import "./badge.scss";
import Ellipse from "../Ellipse";

export interface BadgeProps {
    status:string, //must be a variable defined app.variables.scss or should be defined below
    title?:string ,
    blink?:boolean,
    aura?:boolean
  }

  const Badge=({
    status="success",
    title="active",
    blink=false,
    aura=false
  }:BadgeProps)=>{
    const state=(():any=>{
        switch (status) {
            case "recording":
                return {
                    className:"badge-recording",
                    title:"LIVE",
                    blink:blink,
                    status:"alert"
                }
            default:
              return {
                backgroundColor:`hsla(var(--${status}-hsl), 0.2)`,
                title:title,
                blink:blink,
                aura:aura,
                status:status,
                className:""
              }
            }
    })()
    return(
        <div className={`badge ${state.className}`} style={{backgroundColor:state.backgroundColor}} >
          <Ellipse status={state.status} blink={state.blink} aura={state.aura}/>             
            <span>{state.title}</span>
        </div>
    )
}

export default Badge
