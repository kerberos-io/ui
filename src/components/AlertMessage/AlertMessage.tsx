import React from "react";
import "./alertmessage.scss"
import Icon from "../Icon";
export interface AlertMessageProps{
    message:string,
    onClick?:(
        event:React.MouseEvent<HTMLDivElement,MouseEvent>
    )=>void
}

const AlertMessage = ({message,onClick}:AlertMessageProps)=>{
        return(
            <div className="alert-message" >
                <div>
                    <Icon label="info" />
                    <span className="message">{message}</span>
                </div>
                <div onClick={onClick}>
                 <Icon label="cross" />
                </div>
          </div>
        )
}

export default AlertMessage
