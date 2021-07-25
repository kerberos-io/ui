import React from "react";
import "./badge.scss";
import Ellipse from "../Ellipse";

export interface BadgeProps {
    status:string, //must be a variable defined app.variables.scss or should be defined below
    title?:string ,
    blink?:boolean,
    aura?:boolean,
    devided?:number,
    devisor?:number,
    round?:boolean
  }

  const Badge=({
    status,
    title,
    blink=false,
    aura=false,
    devided,
    devisor,
    round
  }:BadgeProps)=>{
    const state=(():any=>{
        switch (status) {
            case "recording":
                return {
                    className:"badge-recording",
                    title:title,
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
                className:"",            
              }
            }
    })()
    return(
        <div className={`badge ${state.className} ${round?"round":""}`} style={{backgroundColor:state.backgroundColor}} >
          <Ellipse status={state.status} blink={state.blink} aura={state.aura}/>             
            {state.title?<span>{state.title}</span>:null}
            {!state.title&&(devided||devisor)?<><span className="devided">{devided}</span><span className="devisor">/ {devisor}</span></>:null}
        </div>
    )
}

export default Badge
