import React from "react";
import "./imagecard.scss"
import Badge from "../Badge";

export interface ImageHeaderProps{
  label?:string,
  status:string,
  statusTitle?:string
}


export const ImageHeader = ({  
    label,
    status,
    statusTitle,
    }:ImageHeaderProps) => {
    return (
            <div className="videocard-header">
                <h3>{label}</h3>
                <Badge status={status} title={statusTitle}  />
            </div>
    )
}
