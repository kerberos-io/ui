
import React from "react";
import "./alertmessage.scss"
import Icon from "../Icon";
export interface AlertMessageProps{
    message:string,
    show:boolean
}

const AlertMessage = ({message,show=true}:AlertMessageProps)=>{
        let msgRef:any;
        const handleHide =(e:any)=>{
            e.preventDefault()
            msgRef.style.display="none"
        }
        return(
            <div ref={(ref)=>msgRef=ref} className="alert-message" style={{display:show?"flex":"none"}}>
                <Icon label="info" />
                <span>{message}</span>
                <span className="cross-sign" ><Icon label="cross" /></span>
          </div>
        )
}

export default AlertMessage