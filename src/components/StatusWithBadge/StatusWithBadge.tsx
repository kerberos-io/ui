import React from "react";
import "./statuswithbadge.scss"

export interface StatusWithBadgeProps {
    status:String    
  }

  const StatusWithBadge=({status}:StatusWithBadgeProps)=>{
    const state=(():any=>{
        switch (status) {
            case "live":                
                return {
                    fill:"#5EAB6C",
                    backgroundColor:"hsla(123, 54%, 74%, 0.2)",
                    title:"LIVE",
                    fontSize:"13px"
              };
            case "recording":
                return {
                    fill:"#943734",
                    animation: "1s blink ease infinite",
                    title:"LIVE",
                    backgroundColor:"#FFFFFF",
                    fontSize:"11px"
                }
            case "offline":
                return {
                  fill:"#6D6666",
                  title:"OFFLINE",
                  backgroundColor:"hsla(0, 3%, 41%, 0.2)",
                  fontSize:"13px"
                }
            case "event-detected":
              return {
                  fill:"#943734",
                  backgroundColor: "hsla(2, 48%, 39%, 0.2)",
                  title:"EVENT DETECTED",
                  fontSize:"13px"
              }                
            default:
              return <span></span>
            }
    })()
    return(
        <div className="status" style={{backgroundColor:state.backgroundColor,fontSize:state.fontSize}}>
              <svg  width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" style={{animation:state.animation,fill:state.fill}} />
            </svg>
            <span>{state.title}</span>
        </div>
    )
}

export default StatusWithBadge