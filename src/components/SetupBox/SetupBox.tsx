import React from "react";
import "./setupbox.scss"
import Badge from "../Badge";
import Button from "../Button";

export interface SetupBoxProps{
  dashed?:boolean,
  header:string,
  text:string,
  btnicon:string,
  btnlabel:string
}


const SetupBox = ({  
    dashed=false,
    header,
    text,
    btnicon,
    btnlabel
    }:SetupBoxProps) => {
    return (
        <div className={`setup-box ${dashed?" dashed":""}`}>
           <div className="info">
             <h3>{header}</h3>
             <p className="item">{text}</p>
           </div>
           <Button icon={btnicon} label={btnlabel} type="default" />
         </div>
    )
}

export default SetupBox

