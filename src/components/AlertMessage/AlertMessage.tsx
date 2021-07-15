
import React from "react";
import "./alertmessage.scss"
import Icon from "../Icon";
export interface AlertMessageProps{
    message:string
}

const AlertMessage = ({message}:AlertMessageProps)=>{
        return(
            <div className="alert-message">
                <Icon label="info" />
                <span>{message}</span>
                <Icon label="cross" />
          </div>
        )
}

export default AlertMessage