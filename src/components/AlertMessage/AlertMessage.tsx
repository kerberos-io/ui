
import React from "react";
import "./alertmessage.scss"
import Icon from "../Icon";
export interface AlertMessageProps{
    message:string
}

const AlertMessage = ({message}:AlertMessageProps)=>{
        return(
            <div className="alert-message" >
                <div>
                    <Icon label="info" />
                    <span className="message">{message}</span>
                </div>
                <Icon label="cross" />
          </div>
        )
}

export default AlertMessage