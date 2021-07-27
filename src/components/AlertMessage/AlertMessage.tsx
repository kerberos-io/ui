
import React from "react";
import "./alertmessage.scss"
import Icon from "../Icon";
export interface AlertMessageProps{
    message:string
}

const AlertMessage = ({message}:AlertMessageProps)=>{
        let msgRef:any;
        const handleRemove =(e:any)=>{
            e.preventDefault()
            msgRef.remove()
        }
        return(
            <div ref={(ref)=>msgRef=ref} className="alert-message">
                <Icon label="info" />
                <span>{message}</span>
                <span className="cross-sign" onClick={handleRemove}><Icon label="cross" /></span>
          </div>
        )
}

export default AlertMessage