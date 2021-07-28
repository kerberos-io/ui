
import React from "react";
import "./alertmessage.scss"
import Icon from "../Icon";
export interface AlertMessageProps{
    message:string
}

const AlertMessage = ({message}:AlertMessageProps)=>{
        return(
            <div className="alert-message" >
                <Icon label="info" />
                <span>{message}</span>
                <span className="cross-sign" ><Icon label="cross" /></span>
          </div>
        )
}

export default AlertMessage