import React from "react";
import "./videocard.scss"
import Badge from "../Badge";
import Button from "../Button";

export interface SetupBoxProps{
  header:string,
  text:string,
  btnicon:string,
  btnlabel:string
}


export const SetupBox = ({  
    header,
    text,
    btnicon,
    btnlabel
    }:SetupBoxProps) => {
    return (
        <div className="setup-box">
           <div className="info">
             <h3>{header}</h3>
             <p className="item">{text}</p>
           </div>
           <Button icon={btnicon} label={btnlabel} type="default" />
         </div>
    )
}


