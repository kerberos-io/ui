import React from "react";
import "./badge.scss";
import Ellipse from "../Ellipse";

export interface BadgeProps {
    status:String    
  }

  const Badge=({status}:BadgeProps)=>{
    const state=(():any=>{
        switch (status) {
            case "live":                
                return {
                    className:"swb-live",
                    color:"#5EAB6C",
                    title:"LIVE",
              };
            case "recording":
                return {
                    className:"swb-recording",
                    color:"#943734",
                    title:"LIVE",
                    blink:true
                }
            case "offline":
                return {
                  className:"swb-offline",
                  color:"#6D6666",
                  title:"OFFLINE",
                }
            case "event-detected":
              return {
                  className:"swb-event-detected",
                  color:"#943734",
                  title:"EVENT DETECTED",
              }
            case "active":
              return {
                className:"swb-active",
                color:"#5EAB6C",
                title:"ACTIVE",
              }    
            case "update":
              return {
                className:"swb-update",
                color:"#DFB211",
                title:"UPDATE",
              }            
            default:
              return <span></span>
            }
    })()
    return(
        <div className={"status"+` ${state.className}`} >
          <Ellipse color={state.color} blink={state.blink} />
              {/* <svg  width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4"  />
            </svg> */}
            <span>{state.title}</span>
        </div>
    )
}

export default Badge