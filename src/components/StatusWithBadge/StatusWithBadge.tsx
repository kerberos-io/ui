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
                    className:"swb-live",
                    title:"LIVE",
              };
            case "recording":
                return {
                    className:"swb-recording",
                    title:"LIVE",
                }
            case "offline":
                return {
                  className:"swb-offline",
                  title:"OFFLINE",
                }
            case "event-detected":
              return {
                  className:"swb-event-detected",
                  title:"EVENT DETECTED",
              }
            case "active":
              return {
                className:"swb-active",
                title:"ACTIVE",
              }    
            case "update":
              return {
                className:"swb-update",
                title:"UPDATE",
              }            
            default:
              return <span></span>
            }
    })()
    return(
        <div className={"status"+` ${state.className}`} >
              <svg  width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4"  />
            </svg>
            <span>{state.title}</span>
        </div>
    )
}

export default StatusWithBadge