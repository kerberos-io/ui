import React from "react";
import "./videocard.scss"
import Badge from "../Badge";

export interface VideoHeaderProps{
  label?:string,
  status:string,
  statusTitle?:string
}


export const VideoHeader = ({  
    label,
    status,
    statusTitle,
    }:VideoHeaderProps) => {
    return (
            <div className="video-header">
                <h3>{label}</h3>
                <Badge status={status} title={statusTitle}  />
            </div>
    )
}
