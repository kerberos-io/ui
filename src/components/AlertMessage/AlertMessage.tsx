
import React from "react";
import "./alertmessage.scss"
export interface AlertMessageProps{
    message:string
}

const AlertMessage = ({message}:AlertMessageProps)=>{
        return(
            <div className="alert-message">
                <span className="info-circle">!</span>
                <span>{message}</span>
                <span className="cross-sign">X</span>
          </div>
        )
}

export default AlertMessage